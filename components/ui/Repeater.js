import React, { useState, useContext } from "react";
import formContext from '../../context/form/formContext';

const Repeater = (red_social) => {

  const FormContext = useContext(formContext);
  const { redes_sociales, actualizarRedes } = FormContext;

  //estado de la lista de redes sociales
  const [redesSociales, setRedesSociales] = useState(red_social);
  const { index } = redesSociales;

  //Lee los valores del formulario
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...redesSociales];
    list[index][name] = value;
    setRedesSociales(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...redesSociales];
    list.splice(index, 1);
    setRedesSociales(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = (redesSociales) => {
    actualizarRedes(redesSociales);
    // setRedesSociales([...redesSociales, { red_social: ""}]);
  };

  // const [ usuario ] = redesSociales
  // const handleClick = () => {
  //   if(usuario) {
  //     actualizarRedes();
  //   }
  // }

  return (
    <>
    
      <div className="mt-1 relative rounded-md pr-12">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="contacto" className="sr-only">Contacto</label>
            <select 
              className="focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 pl-1 sm:text-sm rounded-md leading-8"
              id="nombrered" 
              name="nombrered" 
              // value={x.red}
            >
              <option>Facebook</option>
              <option>Instagram</option>
            </select>
          </div>

          <div>
            <input 
              className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 w-full pl-28 pr-12 sm:text-sm border-gray-300 rounded-md" 
              placeholder="/usuario"
              autoComplete="off"
              type="text" 
              name="usuario" 
              id="usuario" 
              value={redesSociales.red_social+" "+index}
              onChange={e => handleChange(e, i)}
            />
          </div>

          {/* <div className="absolute inset-y-1 right-0 flex items-center cursor-pointer">
              {redesSociales.length !== 1 && <button onClick={() => handleRemoveClick(index)}>Remove</button>}
              {redes_sociales.length - 1 === index && <button onClick={() => handleAddClick(redesSociales)}>Add</button>}
          </div> */}
          <div className="absolute inset-y-0 right-2 flex items-center">
            <label htmlFor="contacto" className="sr-only">Contacto</label>
          </div>
          {/* <div>
            <button
              // onClick={handleClick}
            >Guardar</button>
          </div> */}
      </div>

    </>
  );
}
 
export default Repeater;