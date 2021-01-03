import React, { useReducer, useContext } from 'react';
import formContext from '../form/formContext';
import formReducer from '../form/formReducer';
import {  
    ACTUALIZAR_URL_TARJETA
} from '../../types';

const FormState = ({children}) => {

    const initialState = {
        urlTarjeta: null
    }

    const [ state, dispatch ] = useReducer(formReducer, initialState); 

    //actualiza redes sociales
    const guardarUrlTarjeta = (url) => {
        dispatch({
            type: ACTUALIZAR_URL_TARJETA,
            payload: url
        })
    }
 
    return (
        <formContext.Provider
            value={{
                urlTarjeta: state.urlTarjeta,
                guardarUrlTarjeta
            }}
        >
            {children}
        </formContext.Provider>
    )
 
};

export default FormState;