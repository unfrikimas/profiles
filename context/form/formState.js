import React, { useReducer, useContext } from 'react';
import formContext from '../form/formContext';
import formReducer from '../form/formReducer';
import {  
    ACTUALIZAR_DATOS_TARJETA,
    LIMPIAR_DATOS_TARJETA
} from '../../types';

const FormState = ({children}) => {

    const initialState = {
        id: "",
        urlTarjeta: "",
        urlImagenUsuario: "",
        nombre: "",
        profesion: "",
        ubicacion: "",
        resumen: "",
        textoBoton: "",
        numeroContacto: "",
        medioContacto: "",
        redesSociales: [],
        creador: {},
        creado: ""
    }

    const [ state, dispatch ] = useReducer(formReducer, initialState); 

    //actualiza redes sociales
    const guardarTarjetaContext = (datosTarjeta) => {
        if(datosTarjeta) {
            dispatch({
                type: ACTUALIZAR_DATOS_TARJETA,
                payload: datosTarjeta
            })
        }
    }

    const limpiarDatosTarjeta = () => {
        dispatch({
            type: LIMPIAR_DATOS_TARJETA
        })
    }
 
    return (
        <formContext.Provider
            value={{
                id: state.id,
                urlTarjeta: state.urlTarjeta,
                urlImagenUsuario: state.urlImagenUsuario,
                nombre: state.nombre,
                profesion: state.profesion,
                ubicacion: state.ubicacion,
                resumen: state.resumen,
                textoBoton: state.textoBoton,
                numeroContacto: state.numeroContacto,
                medioContacto: state.medioContacto,
                redesSociales: state.redesSociales,
                creador: state.creador,
                creado: state.creado,
                guardarTarjetaContext,
                limpiarDatosTarjeta
            }}
        >
            {children}
        </formContext.Provider>
    )
 
};

export default FormState;