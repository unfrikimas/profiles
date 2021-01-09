import React, { useState, useContext, useEffect, Fragment } from "react";
import { FirebaseContext } from '../../firebase';
import { Formik, FieldArray, Field } from 'formik';
import formContext from '../../context/form/formContext';
import Head from "next/head";
import axios from 'axios';
import { useRouter } from 'next/router';
import IconCaptura from '../../components/icons/captura';
import IconPhone from '../../components/icons/phone';
import IconPlus from '../../components/icons/form/plus';
import shortid from 'shortid';
import HeaderUser from '../../components/layouts/HeaderUser';
import useTarjeta from '../../hooks/useTarjeta';
import obtenerTarjeta from '../../utils/obtenerTarjeta';

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

const Card1 = () => {


  // const tarjetaHook = useTarjeta();
  // const { tarjeta } = tarjetaHook;
  // console.log(tarjeta);

  const [ cargando, setCargando ] = useState(false)
  const [ datosTarjeta, setDatosTarjeta ] = useState("")

  //context con los datos de la tarjeta
  const FormContext = useContext(formContext);

  const { 
    id,
    urlTarjeta,
    urlImagenUsuario,
    nombre,
    profesion,
    ubicacion,
    resumen,
    textoBoton,
    numeroContacto,
    medioContacto,
    redesSociales,
    creador,
    creado,
    guardarTarjetaContext
  } = FormContext;

  const [ urlImagen, setUrlImagen ] = useState(urlImagenUsuario)
  const [ pasar, setPasar ] = useState(false);

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  //routing
  const router = useRouter();

  useEffect(() => {
    usuario === USER_STATES.NOT_LOGGED && router.push("/crearcuenta")
  }, [usuario])
  
  useEffect(() => {

  })

  const obtenerDatosTarjeta = (usuario) => {
    obtenerTarjeta(usuario)
      .then((newTarjeta) => {
        guardarTarjetaContext(newTarjeta);
        setDatosTarjeta(newTarjeta);
        setUrlImagen(newTarjeta?.urlimagenusuario)
        setPasar(true);
      })
  }

  useEffect(() => {
    if(usuario) {
      obtenerDatosTarjeta(usuario)
    }
  }, [usuario]);

  //Guardar tarjeta web en Firebase
  function crearTarjetaWeb(values) {

    //objeto de nuevo producto
    const tarjeta = {
      url: shortid.generate(),
      urlimagenusuario: urlImagen,
      nombre: values.nombre, 
      profesion: values.profesion,
      ubicacion: values.ubicacion,
      resumen: values.resumen,
      textoboton: values.texto_boton,
      numerocontacto: values.numero_contacto,
      mediocontacto: values.medio_contacto,
      redessociales: values.redes_sociales,
      creado: Date.now(),
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName
      },
      usuariopremium: false,
    }

    try {      
      //insertar productos en la base de datos
      firebase.db.collection('tarjetas').add(tarjeta);
  
      //llamada a la funcion del context
      guardarTarjetaContext(tarjeta)
  
      //redireccionar luego de agregar un producto
      return router.push('/tarjetacreada');
    } catch (error) {
      console.log(error)
      //redireccionar si hay error
    }

  }

  //Actualizar tarjeta web en Firebase
  const actualizarTarjetaWeb = async (values) => {

    //objeto de nuevo producto
    const tarjeta = {
      // url: shortid.generate(),
      urlimagenusuario: urlImagen,
      nombre: values.nombre, 
      profesion: values.profesion,
      ubicacion: values.ubicacion,
      resumen: values.resumen,
      textoboton: values.texto_boton,
      numerocontacto: values.numero_contacto,
      mediocontacto: values.medio_contacto,
      redessociales: values.redes_sociales
      // creado: Date.now(),
      // creador: {
      //   id: usuario.uid,
      //   nombre: usuario.displayName
      // },
      // usuariopremium: false,
    }

    try {      
      //insertar productos en la base de datos
      const tarjetaRef = firebase.db.collection('tarjetas').doc(id);
      const res = await tarjetaRef.update(tarjeta);

      // firebase.db.collection('tarjetas').add(tarjeta);
  
      //llamada a la funcion del context
      guardarTarjetaContext(tarjeta)
  
      //redireccionar luego de agregar un producto
      return router.push('/tarjetacreada');
    } catch (error) {
      console.log(error)
      //redireccionar si hay error
    }

  }

  const subirACloudinary = async (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", "brevisite");
    setCargando(true);

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/petportrait/upload", formData);
      setUrlImagen(res.data.secure_url);
      setCargando(false);
    } catch (error) {
      console.log(error);
      setCargando(false);
    }
  };

  return (
    
    <>
    { usuario && pasar ?
      <>
      { console.log('pase el filtro', urlImagen) }
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>Crea tu tarjeta web | Brevi Site</title>
      </Head>

      <HeaderUser 
        usuario={usuario}
        firebase={firebase}
      />

      <div
        className="font-sans antialiased text-gray-900 leading-normal tracking-wider h-auto bg-cover"
        style={{backgroundImage: `url(https://source.unsplash.com/QXbDyXXkRMI)`}}
      >
        <div className="w-full sm:max-w-lg flex h-auto items-center flex-wrap mx-auto pt-32 pb-16 sm:my-0">

          <div className="w-full rounded-3xl shadow-xl bg-white opacity-90 mx-4 lg:mx-0 ">     
            { !urlImagen
            ?
            <div
              className={`block rounded-full shadow-xl mx-auto border-2 -mt-16 h-48 w-48 bg-cover bg-center bg-white mb-6 items-center ${ !urlImagen ? "border-dashed border-red-200" : "" }`} 
            >
              <label className="flex flex-col items-center justify-center h-full w-full cursor-pointer">
                <span className="items-center">
                  <IconCaptura />
                </span>
                { cargando
                  ? <span className="mt-2 text-gray-700">Subiendo foto...</span>
                  : <span className="mt-2 text-gray-700">Sube una foto</span> 
                }
                <input
                  className="hidden"
                  type="file" 
                  name="fotografia"
                  onChange={subirACloudinary}
                />
              </label>
            </div>                  
            : 
            <div
              className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-top bg-white mb-6 items-center" 
              style={ { backgroundImage: `url(${urlImagen})` } } 
            >
              <label className="flex flex-col items-center justify-center h-48 cursor-pointer">
                <IconCaptura stroke="#fff"/>
                { cargando ? <span className="mt-2 text-white">Subiendo foto...</span> : null }
                <input
                  className="hidden"
                  type="file" 
                  name="fotografia"
                  onChange={subirACloudinary}
                />
              </label>
            </div>  }

            <Formik
              initialValues={{
                urlImagen: urlImagenUsuario,
                nombre: nombre,
                profesion: profesion,
                ubicacion: ubicacion,
                resumen: resumen,
                texto_boton: textoBoton,
                numero_contacto: numeroContacto,
                medio_contacto: medioContacto,            
                redes_sociales: redesSociales
              }}
              onSubmit={(values) => {
                if(id) {
                  actualizarTarjetaWeb(values)
                } else {
                  crearTarjetaWeb(values)            
                }
              }}
            >
              {(formikProps) => (
                <form 
                  id="profile"
                  autoComplete="off"
                  className="w-full pb-6 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl px-4 lg:p-8 lg:mx-0" 
                  onSubmit={formikProps.handleSubmit}
                >
                  
                  <Field
                    name="nombre"
                  >
                    {(fieldNombre) => (     
                      <>
                        { console.log('nombre', nombre) }
                        <input 
                          className={`focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white w-full text-gray-700 text-2xl text-center font-bold py-2 border-2 ${ formikProps.values.nombre.trim() === "" ? "border-dashed border-red-200" : "border-green-200" }`}
                          placeholder="👶 Nombre"
                          name="nombre"
                          type="text"
                          // value={nombre}
                          // onChange={formikProps.values.nombre.handleChange}
                          {...fieldNombre.field}
                        />
                      </>
                    )}
                  </Field>

                  <div className="mx-auto w-4/5 pt-3 mb-3 border-b-2 border-red-200 opacity-25"></div>
                  
                  <Field
                    name="profesion"
                  >
                    {(fieldProfesion) => (
                      <>
                      <input 
                        className={`w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-3 mt-2 mb-1 text-base text-gray-700 text-center font-bold flex items-center justify-center lg:justify-start border-2 ${ formikProps.values.profesion.trim() === "" ? "border-dashed border-red-200" : "border-green-200" }`}
                        type="text"
                        id="profesion"
                        autoComplete="off"
                        placeholder="🎓 Qué haces"
                        {...fieldProfesion.field}
                      />
                      <p className="text-sm tracking-normal text-center text-gray-500">Ej: Desarrollador Web</p>                                 
                      </>
                    )}
                  </Field>
                  
                  <Field
                    name="ubicacion"
                  >
                    {(fieldUbicacion) => (     
                      <>                 
                      <input 
                        className={`w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-3 mt-4 mb-2 text-base text-gray-700 lg:text-sm text-center font-bold flex items-center justify-center lg:justify-start border-2 ${ formikProps.values.ubicacion.trim() === "" ? "border-dashed border-red-200" : "border-green-200" }`}
                        type="text"
                        id="ubicacion"
                        autoComplete="off"
                        placeholder="🗽 Dónde vives"
                        {...fieldUbicacion.field}
                      />                 
                      </>
                    )}
                  </Field>

                  <Field
                    name="resumen"
                  >
                    {(fieldResumen) => (
                      <>
                      <textarea
                        className={`resize-none w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white h-36 mt-2 text-sm text-gray-700 text-center border-2 px-2 py-2 ${ formikProps.values.resumen.trim() === "" ? "border-dashed border-red-200" : "border-green-200" }`}
                        id="resumen"
                        autoComplete="off"
                        placeholder="🚀 A qué te dedicas"
                        {...fieldResumen.field}
                      />
                      <p className="text-sm tracking-normal text-center text-gray-500">Puedes agregar Emoticones 😉🙏💲</p>
                      </>
                    )}
                  </Field>

                  <Field
                    name="texto_boton"
                  >
                    {(fieldTextBoton) => (
                      <>
                      <input 
                        className={`w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-3 mt-8 mb-2 text-base text-gray-700 text-center font-bold flex items-center justify-center tracking-wide uppercase border-2 ${ formikProps.values.texto_boton.trim() === "" ? "border-dashed border-red-200" : "border-green-200 font-bold" }`}
                        type="text"
                        id="boton"
                        placeholder="TEXTO BOTÓN CONTACTO"
                        {...fieldTextBoton.field}
                      />
                      <p className="text-sm tracking-normal text-center text-gray-500">Ej: CONTACTAR</p>
                      </>                      
                    )}
                  </Field>

                  <div>
                    <p className="text-center tracking-normal text-gray-700 mt-10 mb-4">🙋 Cómo te contactarán</p>
                    <div className={`relative border-2 py-1 ${ formikProps.values.numero_contacto.trim() === "" ? "border-dashed border-red-200" : "border-green-200" }`}>
                      <div className="absolute inset-y-1 left-0 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">
                          <IconPhone width={30} height={30}/>
                        </span>
                      </div>
                      <Field
                        name="numero_contacto"
                      >
                        {(fieldNumeroContacto) => (
                          <input 
                            className="w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-2 pl-7 pr-12 text-gray-700 border-gray-300" 
                            placeholder="Ej: +34682811728"
                            type="text" 
                            id="numero"
                            {...fieldNumeroContacto.field}
                          />
                        )}
                      </Field>
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="contacto" className="sr-only">Contacto</label>
                        <Field
                          name="medio_contacto"                          
                        >
                          {(fieldMedioContacto) => (
                            <select 
                              className="focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-2 pl-1 mr-1 text-gray-700 leading-8"
                              {...fieldMedioContacto.field} 
                            >
                              <option value="whatsapp">WhatsApp</option>
                              <option value="telefono">Llamada</option>
                            </select>
                          )}
                        </Field>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-center text-gray-500 tracking-normal">¡No olvides el código del país!</p>
                  </div>

                  <FieldArray name="redes_sociales">
                    {(fieldArrayProps) => (
                      <>
                        <div className="mt-12 mb-4 text-center text-gray-700">
                          <p>🌟 Redes Sociales</p>
                        </div>
                        {formikProps.values.redes_sociales.map((redsocial, index) => (
                          <Fragment key={index}>
                            <div className={`flex py-1 mt-2 relative border-2 pr-3 ${redsocial.usuario.trim() === "" ? "border-dashed border-red-200" : "border-green-200"}`}>
                                <Field
                                  name={`redes_sociales[${index}].redsocial`}
                                >
                                  {(fieldPropsNombre) => (
                                    <div className="absolute inset-y-0 left-1 flex items-center">
                                      {/* <label htmlFor="redsocial">Redes Sociales</label> */}
                                      <select 
                                        className="focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-2 pl-1 leading-8"
                                        {...fieldPropsNombre.field}
                                      >
                                        <option value="facebook">Facebook</option>
                                        <option value="instagram">Instagram</option>
                                        <option value="linkedin">Linkedin</option>
                                        <option value="twitter">Twitter</option>
                                        <option value="youtube">Youtube</option>
                                        <option value="tiktok">Tik Tok</option>
                                        <option value="pinterest">Pinterest</option>
                                        <option value="dribbble">Dribbble</option>
                                        <option value="behance">Behance</option>
                                      </select>
                                    </div>   
                                  )}
                                </Field>

                                <Field
                                  name={`redes_sociales[${index}].usuario`}
                                >
                                  {(fieldProps) => (
                                    <>
                                      <div>                         
                                        <input
                                          className="w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-2 ml-1 mr-4 pl-28 pr-4 sm:text-sm border-gray-300 lowercase"
                                          placeholder="Tu perfil sin el @"
                                          {...fieldProps.field}
                                        />
                                      </div>
                                      <div className="flex flex-1 ml-2 sm:ml-8 items-center justify-center text-xl">
                                        <button
                                          className="focus:outline-none"
                                          type="button"
                                          onClick={() => fieldArrayProps.remove(index)}
                                        >X</button>
                                      </div>
                                    </>
                                  )}
                                </Field>
                            </div>
                          </Fragment>
                        ))}
                        <div className="flex items-center justify-center my-2 text-gray-700">
                          <p>Agregar red social</p>
                          <button
                            className="focus:outline-none"
                            type="button"
                            onClick={() => fieldArrayProps.push({ redsocial: "facebook", usuario: "" })}
                          >
                            <IconPlus width={45} height={45}/>
                          </button>
                        </div>
                      </>
                    )}
                  </FieldArray>

                  { !urlImagen || formikProps.values.nombre.trim() === "" || formikProps.values.profesion.trim() === "" || formikProps.values.ubicacion.trim() === "" || formikProps.values.resumen.trim() === "" || formikProps.values.texto_boton.trim() === "" || formikProps.values.numero_contacto.trim() === ""
                  ?
                  <button
                      className="w-full focus:outline-none py-4 mt-12 mb-8 text-xl text-center  bg-red-200 text-gray-600 tracking-normal cursor-not-allowed"
                      type="submit"
                      id="boton"
                      name="boton"
                      disabled
                  >Completa todos los datos</button>                  
                  :
                  <button
                      className="cursor-pointer w-full focus:outline-none py-4 mt-12 mb-8 text-xl text-center font-bold bg-principal hover:bg-principal-hover text-white tracking-normal"
                      type="submit"
                      id="boton"
                      name="boton"
                  >{ !id ? 'Publicar tarjeta web' : 'Actualizar tarjeta web' }</button>
                  }

                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      </>
    : 
    
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
      <title>Crea tu tarjeta web | Brevi Site</title>
   </Head>

    }
    </>
  );

};

export default Card1;
