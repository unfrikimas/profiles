import React from 'react';
import {  
    ACTUALIZAR_DATOS_TARJETA,
    NO_HAY_TARJETA,
    LIMPIAR_DATOS_TARJETA
} from '../../types';

const formReducer = (state, action) => {
    switch(action.type) {
        case ACTUALIZAR_DATOS_TARJETA:
            return {
                ...state,
                id: action.payload.id,
                urlTarjeta: action.payload.url,
                urlImagenUsuario: action.payload.urlimagenusuario,
                nombre: action.payload.nombre,
                profesion: action.payload.profesion,
                ubicacion: action.payload.ubicacion,
                resumen: action.payload.resumen,
                textoBoton: action.payload.textoboton,
                numeroContacto: action.payload.numerocontacto,
                medioContacto: action.payload.mediocontacto,
                redesSociales: action.payload.redessociales,
                creador: action.payload.creador,
                creado: action.payload.creado
            }
        case NO_HAY_TARJETA:
            return {
                ...state,
                id: '0'
            }
        case LIMPIAR_DATOS_TARJETA:
            return {
                ...state,
                id: '',
                urlTarjeta: '',
                urlImagenUsuario: '',
                nombre: '',
                profesion: '',
                ubicacion: '',
                resumen: '',
                textoBoton: '',
                numeroContacto: '',
                medioContacto: '',
                redesSociales: [],
                creador: {},
                creado: ''              
            }
        default:
            return state;
    }
}
 
export default formReducer;