import React, { useState, Fragment } from 'react';
import { Formik, FieldArray, Field } from 'formik';

const Pruebas = () => {

    const [ nombreRedSocial, setNombreRedSocial ] = useState("")


  return (  

    <div className="mx-auto py-10">
      <Formik
        initialValues={{
            url_imagen: '',
            nombre: '',
            profesion: '',
            ubicacion: '',
            resumen: '',
            texto_boton: '',
            numero_contacto: '',
            medio_contacto: '',            
            redes_sociales: [{ redsocial: "", usuario: "" }]
        }}
        onSubmit={(value) => {
          console.log(value)
        }}
      >
        {(formikProps) => (
          <form 
            onSubmit={formikProps.handleSubmit}
          >
            
            <FieldArray name="redes_sociales">
              {(fieldArrayProps) => (
                <>

                  <div>
                    <button
                      type="button"
                      onClick={() => fieldArrayProps.push({ redsocial: "", usuario: "" })}
                    >
                      Add input
                    </button>
                  </div>

                  {formikProps.values.redes_sociales.map((redsocial, index) => (
                    <Fragment key={index}>
                        <div className="mt-1 relative rounded-md pr-12">
                            <Field
                                // key={index}   
                                name={`redes_sociales.${index}.redsocial`}
                            >
                                {(fieldPropsNombre) => (
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        {/* <label htmlFor="redsocial">Redes Sociales</label> */}
                                        <select 
                                            className="focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 pl-1 sm:text-sm rounded-md leading-8"
                                            // id="nombreredsocial" 
                                            // name="nombreredsocial" 
                                            // onChange={e => setNombreRedSocial(e.target.value)}
                                            {...fieldPropsNombre.field}
                                        >
                                            <option value="" disabled>Red Social</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="instagram">Instagram</option>
                                            <option value="linkedin">Linkedin</option>
                                        </select>
                                    </div>   
                                )}
                            </Field>

                            <Field
                                // key={index+1}
                                name={`redesociales.${index}.usuario`}
                            >
                                {(fieldProps) => (
                                    <>
                                        <div className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 w-full pl-28 pr-12 sm:text-sm border-gray-300 rounded-md">                         
                                            <input
                                                placeholder="/usuario"
                                                {...fieldProps.field}
                                            />
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

                </>
              )}
            </FieldArray>
            <button
              type="submit"
            >Submit</button>
          </form>
        )}
      </Formik>
    </div>

  );
}
 
export default Pruebas;
