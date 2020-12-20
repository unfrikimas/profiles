import React from 'react';
import {  
    ACTUALIZAR_REDES_SOCIALES
} from '../../types';

const formReducer = (state, action) => {
    switch(action.type) {
        case ACTUALIZAR_REDES_SOCIALES:
            return {
                ...state,
                redes_sociales: action.payload
            }
        default:
            return state;
    }
}
 
export default formReducer;