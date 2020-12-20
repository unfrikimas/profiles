import React, { useReducer, useContext } from 'react';
import formContext from '../form/formContext';
import formReducer from '../form/formReducer';
import {  
    ACTUALIZAR_REDES_SOCIALES
} from '../../types';

const FormState = ({children}) => {

    const initialState = {
        url_imagen: '',
        nombre: '',
        profesion: '',
        ubicacion: '',
        resumen: '',
        texto_boton: '',
        numero_contacto: '',
        medio_contacto: '',
        redes_sociales: [{ red_social: "facebook" }, {red_social: "instagram"}, {red_social: "linkedin"}]
    }

    const [ state, dispatch ] = useReducer(formReducer, initialState); 

    //actualiza redes sociales
    const actualizarRedes = (redesSociales) => {
        dispatch({
            type: ACTUALIZAR_REDES_SOCIALES,
            payload: [...redesSociales, { red_social: "youtube" }]
        })
    }
 
    return (
        <formContext.Provider
            value={{
                url_imagen: state.url_imagen,
                nombre: state.nombre,
                profesion: state.profesion,
                ubicacion: state.ubicacion,
                resumen: state.resumen,
                texto_boton: state.texto,
                numero_contacto: state.numero_contacto,
                medio_contacto: state.medio_contacto,
                redes_sociales: state.redes_sociales,
                actualizarRedes
            }}
        >
            {children}
        </formContext.Provider>
    )
 
};

export default FormState;