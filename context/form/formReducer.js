import React from 'react';
import {  
    ACTUALIZAR_URL_TARJETA
} from '../../types';

const formReducer = (state, action) => {
    switch(action.type) {
        case ACTUALIZAR_URL_TARJETA:
            return {
                ...state,
                urlTarjeta: action.payload
            }
        default:
            return state;
    }
}
 
export default formReducer;