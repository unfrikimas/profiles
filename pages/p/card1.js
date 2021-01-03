import React, { useState, useContext, useEffect, Fragment } from "react";
import { FirebaseContext } from '../../firebase';
import { Formik, FieldArray, Field } from 'formik';
import formContext from '../../context/form/formContext';
import Head from "next/head";
import axios from 'axios';
import { useRouter } from 'next/router';
import IconCaptura from '../../components/icons/captura';
import IconPhone from '../../components/icons/phone';
import IconFacebook from '../../components/icons/socials/facebook';
import IconTwitter from '../../components/icons/socials/twitter';
import IconGitHub from '../../components/icons/socials/github';
import IconPlus from '../../components/icons/form/plus';
import IconMinus from '../../components/icons/form/minus';
import shortid from 'shortid';
import Repeater from '../../components/ui/RedesSociales';

const Card1 = () => {

  const FormContext = useContext(formContext);
  const { redes_sociales, actualizarRedes } = FormContext;
 
  const [ urlImagen, setUrlImagen ] = useState('')
  const [ cargando, setCargando ] = useState(false)

  const [redesSociales, setRedesSociales] = useState(redes_sociales);  

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  //routing
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Redes Sociales", redesSociales);
  };
    

    //Guardar tarjeta web en Firebase
  function CrearTarjetaWeb(values) {

    //si el usuario no esta autenticado llevar al login
    // if(!usuario) {
    //   return router.push('/landing');
    // }  

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
      // creador: {
      //   id: usuario.uid,
      //   nombre: usuario.displayName
      // },
      usuariopremium: false
    }

    //insertar productos en la base de datos
    firebase.db.collection('tarjetas').add(tarjeta);

    //redireccionar luego de agregar un producto
    return router.push('/');

  }

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...redesSociales];
    list.splice(index, 1);
    setRedesSociales(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    actualizarRedes(redesSociales);
    // setRedesSociales([...redesSociales, { red_social: ""}]);
  };

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>Crea tu tarjeta web | Brevi Site</title>
      </Head>

      <div
        className="font-sans antialiased text-gray-900 leading-normal tracking-wider h-auto bg-cover"
        style={{backgroundImage: `url(https://source.unsplash.com/QXbDyXXkRMI)`}}
      >
        <div className="w-full sm:max-w-lg flex h-auto items-center flex-wrap mx-auto pt-32 pb-16 sm:my-0">

          <div className="w-full rounded-3xl shadow-xl bg-white opacity-90 mx-4 lg:mx-0 ">     
            { !urlImagen 
            ?
            <div
              className={`block rounded-full shadow-xl mx-auto border-2 -mt-16 h-48 w-48 bg-cover bg-center bg-white mb-6 items-center ${ !urlImagen ? "border-dashed border-green-500" : "" }`} 
            >
              <label className="flex flex-col items-center justify-center h-full w-full cursor-pointer">
                <span className="items-center">
                  <IconCaptura />
                </span>
                { cargando
                  ? <span className="mt-2">Subiendo foto...</span>
                  : <span className="mt-2">Sube una foto</span> }
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
              style={{backgroundImage: `url(${urlImagen})`}} 
            >
              <label className="flex flex-col items-center justify-center h-48">
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
                urlImagen: '',
                nombre: '',
                profesion: '',
                ubicacion: '',
                resumen: '',
                texto_boton: '',
                numero_contacto: '',
                medio_contacto: 'whatsapp',            
                redes_sociales: [{ redsocial: "facebook", usuario: "" }]
              }}
              onSubmit={(values) => {
                CrearTarjetaWeb(values)            
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
                        <input 
                          className={`focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white w-full rounded-xl text-2xl text-center font-bold py-2 lg:pt-0 border-2 ${ formikProps.values.nombre.trim() === "" ? "border-dashed border-green-500" : "" }`}
                          autoComplete="off"
                          placeholder="👶 Nombre"
                          type="text"
                          {...fieldNombre.field}
                        />
                      </>
                    )}
                  </Field>

                  <div className="mx-auto w-4/5 pt-3 mb-3 border-b-2 border-green-500 opacity-25"></div>
                  
                  <Field
                    name="profesion"
                  >
                    {(fieldProfesion) => (
                      <>
                      <input 
                        className={`w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white rounded-xl py-3 mt-2 mb-1 text-base text-center font-bold flex items-center justify-center lg:justify-start border-2 ${ formikProps.values.profesion.trim() === "" ? "border-dashed border-green-500" : "" }`}
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
                        className={`w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white rounded-xl py-3 mt-4 mb-2 text-base lg:text-sm text-center font-bold flex items-center justify-center lg:justify-start border-2 ${ formikProps.values.ubicacion.trim() === "" ? "border-dashed border-green-500" : "" }`}
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
                        className={`resize-none w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white h-36 rounded-xl mt-2 text-sm text-center border-2 px-2 py-2 ${ formikProps.values.resumen.trim() === "" ? "border-dashed border-green-500" : "" }`}
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
                        className={`w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white rounded-xl py-3 mt-8 mb-2 text-base text-center font-bold flex items-center justify-center border-2 ${ formikProps.values.texto_boton.trim() === "" ? "border-dashed border-green-500" : "tracking-wide bg-green-700 hover:bg-green-900 text-white text-lg font-bold" }`}
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
                    <p className="text-center tracking-normal font-bold text-gray-600 mt-10 mb-4">🙋 Cómo te contactarán</p>
                    <div className={`relative border-2 rounded-xl py-1 ${ formikProps.values.numero_contacto.trim() === "" ? "border-dashed border-green-500" : "" }`}>
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
                            className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" 
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
                              className="focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 pl-1 mr-1 sm:text-sm rounded-md leading-8"
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
                        <div className="mt-12 mb-4 text-center text-gray-600 font-bold">
                          <p>🌟 Redes Sociales</p>
                        </div>
                        {formikProps.values.redes_sociales.map((redsocial, index) => (
                          <Fragment key={index}>
                            <div className={`flex py-1 mt-2 relative border-2 pr-3 rounded-xl ${redsocial.usuario.trim() === "" ? 'border-dashed border-green-500' : ''}`}>
                                <Field
                                  name={`redes_sociales[${index}].redsocial`}
                                >
                                  {(fieldPropsNombre) => (
                                    <div className="absolute inset-y-0 left-1 flex items-center">
                                      {/* <label htmlFor="redsocial">Redes Sociales</label> */}
                                      <select 
                                        className="focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 pl-1 sm:text-sm rounded-md leading-8"
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
                                          className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 ml-1 mr-4 pl-28 pr-4 sm:text-sm border-gray-300 rounded-md"
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
                          <p>Agrega otra Red</p>
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
                      className="w-full focus:outline-none rounded-xl py-4 mt-12 mb-8 text-1xl lg:text-sm text-center font-bold bg-green-100 text-gray-700 tracking-wider cursor-not-allowed"
                      type="submit"
                      id="boton"
                      name="boton"
                      disabled
                  >COMPLETA TODOS LOS DATOS</button>                  
                  :
                  <button
                      className="cursor-pointer w-full focus:outline-none rounded-xl py-4 mt-12 mb-8 text-1xl lg:text-sm text-center font-bold bg-purple-600 text-white tracking-wider"
                      type="submit"
                      id="boton"
                      name="boton"
                  >PUBLICAR TARJETA WEB</button>
                  }

                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
