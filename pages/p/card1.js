import React, { useState, useContext, useEffect, Fragment } from "react";
import { Formik, FieldArray, Field } from 'formik';
import formContext from '../../context/form/formContext';
import Head from "next/head";
import axios from 'axios';
import IconCaptura from '../../components/icons/captura';
import IconPhone from '../../components/icons/phone';
import IconFacebook from '../../components/icons/socials/facebook';
import IconTwitter from '../../components/icons/socials/twitter';
import IconGitHub from '../../components/icons/socials/github';
import IconPlus from '../../components/icons/form/plus';
import IconMinus from '../../components/icons/form/minus';
import shortid from 'shortid';
import Repeater from '../../components/ui/Repeater';

const Card1 = () => {

  const FormContext = useContext(formContext);
  const { redes_sociales, actualizarRedes } = FormContext;
 
  const [ urlImagen, setUrlImagen ] = useState('')
  const [ cargando, setCargando ] = useState(false)

  const [redesSociales, setRedesSociales] = useState(redes_sociales);  




    const handleSubmit = e => {
      e.preventDefault();
      console.log("Redes Sociales", redesSociales);
    };
    

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
    console.log(formData)

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
        <title>My Profile Card</title>
        <meta name="description" content=""></meta>
        <meta name="keywords" content=""></meta>
        <meta name="author" content=""></meta>
      </Head>

      <div
        className="font-sans antialiased text-gray-900 leading-normal tracking-wider h-auto bg-cover"
        style={{backgroundImage: `url(https://source.unsplash.com/QXbDyXXkRMI)`}}
      >
        <div className="w-full max-w-4xl flex h-auto items-center flex-wrap mx-auto pt-32 pb-16 lg:my-0">

          <div className="w-full lg:w-3/5 rounded-2xl lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-4 lg:mx-0 ">     
            { !urlImagen 
            ?
            <div
              className="block lg:hidden rounded-full shadow-2xl mx-auto border-2 border-dashed border-green-500 -mt-16 h-48 w-48 bg-cover bg-center bg-white mb-6 items-center" 
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
              className="block lg:hidden rounded-full shadow-2xl mx-auto border-2 border-dashed border-green-500 -mt-16 h-48 w-48 bg-cover bg-center bg-white mb-6 items-center" 
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
                url_imagen: '',
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
                console.log(values)
              }}
            >
              {(formikProps) => (
                <form 
                  id="profile"
                  autoComplete="off"
                  className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl px-4 lg:p-8 lg:mx-0" 
                  onSubmit={formikProps.handleSubmit}
                >

                  
                  <Field
                    name="nombre"
                  >
                    {(fieldNombre) => (                     
                      <input 
                        className="focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white w-full rounded-xl text-2xl text-center font-bold py-2 lg:pt-0 border-2 border-dashed border-green-500"
                        autoComplete="off"
                        placeholder="👶 Nombre"
                        type="text"
                        {...fieldNombre.field}
                      />
                    )}
                  </Field>

                  <div className="mx-auto lg:mx-0 w-4/5 pt-3 mb-3 border-b-2 border-green-500 opacity-25"></div>
                  
                  <Field
                    name="profesion"
                  >
                    {(fieldProfesion) => (
                      <input 
                        className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white rounded-xl py-3 my-2 text-base text-center font-bold flex items-center justify-center lg:justify-start border-2 border-dashed border-green-500"
                        type="text"
                        id="profesion"
                        autoComplete="off"
                        placeholder="🎓 Qué haces"
                        {...fieldProfesion.field}
                      />
                    )}
                  </Field>
                  
                  <Field
                    name="ubicacion"
                  >
                    {(fieldUbicacion) => (                      
                      <input 
                        className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white rounded-xl py-3 my-2 text-base lg:text-sm text-center font-bold flex items-center justify-center lg:justify-start border-2 border-dashed border-green-500"
                        type="text"
                        id="ubicacion"
                        autoComplete="off"
                        placeholder="🗽 Dónde estás"
                        {...fieldUbicacion.field}
                      />
                    )}
                  </Field>

                  <Field
                    name="resumen"
                  >
                    {(fieldResumen) => (
                      <textarea
                        className="resize-none w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white h-36 rounded-xl mt-2 text-sm border-2 border-dashed border-green-500 px-2 py-2"
                        id="resumen"
                        autoComplete="off"
                        placeholder="🚀 A qué te dedicas"
                        {...fieldResumen.field}
                      />
                    )}
                  </Field>

                  <Field
                    name="texto_boton"
                  >
                    {(fieldTextBoton) => (
                      <input 
                        className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white rounded-xl py-3 mt-8 mb-4 text-base lg:text-sm text-center font-bold flex items-center justify-center lg:justify-start border-2 border-dashed border-green-500"
                        type="text"
                        id="boton"
                        autoComplete="off"
                        placeholder="TEXTO BOTÓN CONTACTO"
                        {...fieldTextBoton.field}
                      />
                    )}
                  </Field>

                  <div>
                    <div className="mt-1 relative rounded-md">
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
                            className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" 
                            placeholder="Número contacto"
                            autoComplete="off"
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
                              className="focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 pl-1 sm:text-sm rounded-md leading-8"
                              id="numero"
                              {...fieldMedioContacto.field} 
                            >
                              <option value="whatsapp">WHATSAPP</option>
                              <option value="telefono">TELÉFONO</option>
                            </select>
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>

                  <FieldArray name="redes_sociales">
                    {(fieldArrayProps) => (
                      <>
                        <div className="my-4">
                          <p>Redes Sociales</p>
                        </div>
                        {formikProps.values.redes_sociales.map((redsocial, index) => (
                          <Fragment key={index}>
                            <div className="flex py-1 mt-2 relative border-2 border-dashed border-green-500 pr-3 rounded-xl">
                                <Field
                                  name={`redes_sociales.${index}.redsocial`}
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
                                      </select>
                                    </div>   
                                  )}
                                </Field>

                                <Field
                                  name={`redes_sociales.${index}.usuario`}
                                >
                                  {(fieldProps) => (
                                    <>
                                      <div>                         
                                        <input
                                          className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 ml-1 mr-4 pl-28 pr-4 sm:text-sm border-gray-300 rounded-md"
                                          placeholder="Usuario"
                                          {...fieldProps.field}
                                        />
                                      </div>
                                      <div className="flex flex-1 ml-2 items-center justify-center text-xl">
                                        <button
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
                        <div className="flex items-center justify-center my-2">
                          <p>Agregar Red Social</p>
                          <button
                            className="focus:outline-none"
                            type="button"
                            onClick={() => fieldArrayProps.push({ redsocial: "", usuario: "" })}
                          >
                            <IconPlus width={50} height={50}/>
                          </button>
                        </div>
                      </>
                    )}
                  </FieldArray>

                  <button
                      className="cursor-pointer w-full focus:outline-none rounded-xl py-3 mt-8 mb-4 text-1xl lg:text-sm text-center font-bold flex items-center justify-center lg:justify-start border-2 border-dashed border-green-500"
                      type="submit"
                      id="boton"
                      name="boton"
                  >PUBLICAR</button>

                </form>
              )}
            </Formik>
          </div>
          <div className="w-full lg:w-2/5">
            <img
              src="https://source.unsplash.com/MP0IUfwrn0A"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
