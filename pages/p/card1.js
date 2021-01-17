import React, { useState, useContext, useEffect, Fragment, useRef } from "react";
import Link from 'next/link';
import { FirebaseContext } from '../../firebase';
import { Formik, FieldArray, Field } from 'formik';
import formContext from '../../context/form/formContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import IconCaptura from '../../components/icons/captura';
import IconPlus from '../../components/icons/form/plus';
import IconUpload from '../../components/icons/form/upload';
import IconEditar from '../../components/icons/form/edit';
import IconInfo from '../../components/icons/form/info';
import shortid from 'shortid';
import Layout from '../../components/layouts/Layout';

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

const Card1 = () => {

  const [ cargando, setCargando ] = useState(false)

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

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  //routing
  const router = useRouter();

  const formRef = useRef();

  useEffect(() => {
    const textNombre = formRef.current?.value
    if(id && id !== '0' && textNombre === "") {
      router.replace('/dashboard');
    }
    setUrlImagen(urlImagenUsuario)
  }, [id])

  //Guardar tarjeta web en Firebase
  const crearTarjetaWeb = async (values) => {
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
      }
    }

    try {      
      //insertar productos en la base de datos
      const tarjetaRef = await firebase.db.collection('tarjetas')
      await tarjetaRef.add(tarjeta);

      // await firebase.db.collection('tarjetas').add(tarjeta);
  
      //llamada a la funcion del context
      guardarTarjetaContext(tarjeta)
  
      //redireccionar luego de agregar un producto
      return router.replace(`/tarjetacreada/?url=${tarjeta.url}`);
    } catch (error) {
      console.log(error)
      //redireccionar si hay error
      return router.replace('/');
    }
  }

  //Actualizar tarjeta web en Firebase
  const actualizarTarjetaWeb = async (values) => {
    //objeto de nuevo producto
    const tarjeta = {
      urlimagenusuario: urlImagen,
      nombre: values.nombre, 
      profesion: values.profesion,
      ubicacion: values.ubicacion,
      resumen: values.resumen,
      textoboton: values.texto_boton,
      numerocontacto: values.numero_contacto,
      mediocontacto: values.medio_contacto,
      redessociales: values.redes_sociales
    }

    try {      
      //insertar productos en la base de datos
      const tarjetaRef = await firebase.db.collection('tarjetas').doc(id);
      await tarjetaRef.update(tarjeta);
  
      //llamada a la funcion del context
      guardarTarjetaContext(tarjeta)
  
      //redireccionar luego de agregar un producto
      return router.replace(`/tarjetacreada/?url=${urlTarjeta}`);
    } catch (error) {
      console.log(error)
      //redireccionar si hay error
      return router.replace('/')
    }
  }

  //Guardar imagen en Cloudinary
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
    <Layout>
    { usuario && id ?
      <>
      
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
                if(id && id !== '0') {
                  actualizarTarjetaWeb(values)
                } else if (id === '0') {
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
                        <label className="text-sm text-gray-500 tracking-normal">
                          { formikProps.values.nombre.trim() === "" ? " " : "Nombre:" }
                        </label>
                        <input 
                          className={`focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white w-full text-gray-700 text-2xl text-center font-bold mb-4 py-2 border-2 ${ formikProps.values.nombre.trim() === "" ? "border-dashed border-red-200" : "border-green-200" }`}
                          placeholder="👶 Nombre"
                          name="nombre"
                          type="text"
                          ref={formRef}
                          {...fieldNombre.field}
                        />
                      </>
                    )}
                  </Field>
                  
                  <Field
                    name="profesion"
                  >
                    {(fieldProfesion) => (
                      <>
                      <label className="text-sm text-gray-500 tracking-normal">
                        { formikProps.values.profesion.trim() === "" ? " " : "Profesión:" }
                      </label>                      
                      <input 
                        className={`w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-3 mb-1 text-base text-gray-700 text-center font-bold flex items-center justify-center lg:justify-start border-2 ${ formikProps.values.profesion.trim() === "" ? "border-dashed border-red-200" : "border-green-200" }`}
                        type="text"
                        id="profesion"
                        autoComplete="off"
                        placeholder="🎓 Profesión | Oficio"
                        {...fieldProfesion.field}
                      />
                      <p className="mb-3 text-sm tracking-normal text-center text-gray-500">Ej: Desarrollador Web</p>                                 
                      </>
                    )}
                  </Field>
                  
                  <Field
                    name="ubicacion"
                  >
                    {(fieldUbicacion) => (     
                      <>
                      <label className="text-sm text-gray-500 tracking-normal">
                        { formikProps.values.ubicacion.trim() === "" ? " " : "Ubicación:" }
                      </label>                      
                      <input 
                        className={`w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-3 mb-4 text-base text-gray-700 lg:text-sm text-center font-bold flex items-center justify-center lg:justify-start border-2 ${ formikProps.values.ubicacion.trim() === "" ? "border-dashed border-red-200" : "border-green-200" }`}
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
                      <label className="text-sm text-gray-500 tracking-normal">
                        { formikProps.values.resumen.trim() === "" ? " " : "Resumen:" }
                      </label>
                      <textarea
                        className={`resize-none w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white h-36 text-sm text-gray-700 text-center border-2 px-2 py-2 ${ formikProps.values.resumen.trim() === "" ? "border-dashed border-red-200" : "border-green-200" }`}
                        id="resumen"
                        autoComplete="off"
                        placeholder="🚀 A qué te dedicas"
                        {...fieldResumen.field}
                      />
                      <p className="mb-7 text-sm tracking-normal text-center text-gray-500">Puedes agregar Emoticones 😉🙏💲</p>
                      </>
                    )}
                  </Field>

                  <Field
                    name="texto_boton"
                  >
                    {(fieldTextBoton) => (
                      <>
                      <label className="text-sm text-gray-500 tracking-normal">
                        { formikProps.values.texto_boton.trim() === "" ? " " : "Botón:" }
                      </label>
                      <input 
                        className={`w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-3 mb-2 text-base text-gray-700 text-center font-bold flex items-center justify-center tracking-wide uppercase border-2 ${ formikProps.values.texto_boton.trim() === "" ? "border-dashed border-red-200" : "border-green-200 font-bold" }`}
                        type="text"
                        id="boton"
                        placeholder="TEXTO BOTÓN"
                        {...fieldTextBoton.field}
                      />
                      <p className="text-sm tracking-normal text-center text-gray-500">Ej: CONTACTAR</p>
                      </>                      
                    )}
                  </Field>

                  <div>
                    <p className="text-center tracking-normal text-gray-700 mt-11 mb-4">🙋 Cómo te contactarán</p>
                    <div 
                      className={`flex relative border-2 py-1 px-1 ${ formikProps.values.numero_contacto.trim() === "" ? "border-dashed border-red-200" : "border-green-200" }`}>
                      {/* <div className="absolute inset-y-1 left-0 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">
                          <IconPhone width={30} height={30}/>
                        </span>
                      </div> */}
                      <div className="flex items-center">
                        {/* <label htmlFor="contacto" className="sr-only">Contacto</label> */}
                        <Field
                          name="medio_contacto"         
                        >
                          {(fieldMedioContacto) => (
                            <select 
                              className="focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-2 pl-1 mr-1 text-center text-gray-700 leading-8"
                              {...fieldMedioContacto.field} 
                            >
                              <option value="" disabled>Elije cómo</option>
                              <option value="whatsapp">WhatsApp</option>
                              <option value="telefono">Llamada</option>
                              <option value="correo">Correo</option>
                            </select>
                          )}
                        </Field>
                      </div>           

                      <Field
                        name="numero_contacto"
                      >
                        {(fieldNumeroContacto) => (
                          <input 
                            className="w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-2 pl-1 pr-1 text-gray-700 border-gray-300" 
                            placeholder={formikProps.values.medio_contacto.trim() === "correo" ? "Ej: carlos@gmail.com" : "Ej: +34682811728"}
                            type="text" 
                            id="numero"
                            {...fieldNumeroContacto.field}
                          />
                        )}
                      </Field>

                    </div>
                    
                    { formikProps.values.medio_contacto.trim() === "correo" 
                    ?
                      <p 
                        className="mt-1 text-sm text-center text-gray-500 tracking-normal">¡No olvides el <span className="font-bold">@</span>!
                      </p>
                    :
                      <p 
                        className="mt-1 text-sm text-center text-gray-500 tracking-normal">¡No olvides tu código de país! <span className="font-bold">Ej: +34</span>
                      </p>
                    }
                  </div>

                  <FieldArray name="redes_sociales">
                    {(fieldArrayProps) => (
                      <>
                        <div className="mt-12 mb-4 text-center text-gray-700">
                          <p>🌟 Redes Sociales</p>
                        </div>

                        {formikProps.values.redes_sociales.map((redsocial, index) => (
                          <Fragment key={index}>
                            <div className={`flex py-1 pl-1 mt-2 relative border-2 mr-1 ${redsocial.usuario.trim() === "" ? "border-dashed border-red-200" : "border-green-200"}`}>
                                <Field
                                  name={`redes_sociales[${index}].redsocial`}
                                  // name={redsocial.redsocial}
                                >
                                  {(fieldPropsNombre) => (
                                    <div className="flex items-center">
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
                                  // name={redsocial.usuario}
                                >
                                  {(fieldProps) => (
                                    <>
                                      <div>        
                                        <input
                                          className="w-full focus:outline-none focus:ring-2 focus:ring-principal-hover focus:ring-opacity-50 focus:border-white py-2 ml-1 mr-4 pl-1 pr-1 sm:text-sm border-gray-300 lowercase"
                                          placeholder="Tu perfil sin el @"
                                          {...fieldProps.field}
                                        />
                                      </div>
                                      <div className="flex flex-1 ml-2 sm:ml-8 items-center justify-center text-xl">
                                        <button
                                          className="pr-2 text-red-400 focus:outline-none"
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
                            <IconPlus width={40} height={40}/>
                          </button>
                        </div>
                      </>
                    )}
                  </FieldArray>

                  { !urlImagen || formikProps.values.nombre.trim() === "" || formikProps.values.profesion.trim() === "" || formikProps.values.ubicacion.trim() === "" || formikProps.values.resumen.trim() === "" || formikProps.values.texto_boton.trim() === "" || formikProps.values.numero_contacto.trim() === "" || formikProps.values.medio_contacto.trim() === ""
                  ?
                  <button
                      className="w-full focus:outline-none py-4 mt-12 mb-8 text-lg text-center  bg-red-200 text-gray-600 tracking-normal cursor-not-allowed"
                      type="submit"
                      id="boton"
                      name="boton"
                      disabled
                  >Completa todos los datos</button>                  
                  :
                  <button
                      className="flex space-x-1 items-center justify-center cursor-pointer w-full focus:outline-none py-4 mt-12 mb-8 text-lg bg-principal hover:bg-principal-hover text-white tracking-normal"
                      type="submit"
                      id="boton"
                      name="boton"
                  >
                    { id === '0' ? (
                    <>
                    <IconUpload width={30} heigth={30} stroke={"#ffffff"}/>
                    <span>Publicar tarjeta</span>
                    </> 
                    ) : (
                    <> 
                    <IconEditar width={30} heigth={30} stroke={"#ffffff"}/>
                    <span>Actualizar tarjeta</span>
                    </>
                    )}
                  </button>
                  }
                </form>
              )}
            </Formik>
          </div>
        </div>

        <div className="bg-white pt-8 pb-10 px-12 tracking-normal text-center">
          <div>
            <p className="text-gray-700">¿Quieres una tarjeta web con más imágenes, más texto y más enlaces?</p>
          </div>
          <Link href="/precios">
            <a
              className="flex space-x-1 items-center justify-center w-56 mx-auto mt-4 pt-3 pb-3.5 text-center text-lg bg-principal hover:bg-principal-hover text-white tracking-normal focus:outline-none"
            >
              <IconInfo width={20} heigth={20}/>
              <span>Ver precios</span>
            </a>
          </Link>
        </div>

      </div>
      </>
    : 

      <p className="text-center pt-48">Cargando...</p>

    }
    </Layout>
    </>
  );

};

export default Card1;
