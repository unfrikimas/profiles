import React from 'react';
import { Formik, FieldArray, Field } from 'formik';

const Pruebas2 = () => {

  return (  

    <div className="mx-auto py-10">
      <Formik
        initialValues={{
          options: [{ name: "" }]
        }}
        onSubmit={(value) => {
          console.log(value)
        }}
      >
        {(formikProps) => (
          <form 
            onSubmit={formikProps.handleSubmit}
          >
            
            <FieldArray name="options">
              {(fieldArrayProps) => (
                <>
                  <div>
                    <button
                      type="button"
                      onClick={() => fieldArrayProps.push({ name: "" })}
                    >
                      Add input
                    </button>
                  </div>
                  {formikProps.values.options.map((option, index) => (
                    <Field
                      key={index}
                      name={`options.${index}.name`}
                    >
                      {(fieldProps) => (
                        <div>
                          <input
                            placeholder="add name"
                            {...fieldProps.field}
                          />
                          <button
                            type="button"
                            onClick={() => fieldArrayProps.remove(index)}
                          >X</button>
                        </div>
                      )}
                    </Field>
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
 
export default Pruebas2;
