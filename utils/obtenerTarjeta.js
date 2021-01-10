import React from 'react';
import firebase from '../firebase';

export const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined,
}

function obtenerTarjeta(usuario) {


        //si hay usuario
        if(usuario) {
            const consultaDB = async () => {
                return await firebase.db
                    .collection('tarjetas')
                    .where('creador.id', '==', usuario.uid)
                    .get()
                    .then(snapshot => {
                        if (snapshot.empty) {
                            console.log('No ha creado una tarjeta');
                        }
                        const datosTarjeta = snapshot.docs.map(doc => {
                            const data = doc.data()
                            return {
                            id: doc.id,
                            ...data,
                            }
                        })
                        return datosTarjeta[0]
                    })
                    .catch(err => {
                        console.log('Error', err)
                    })
            }
            return consultaDB();

        }

}
 
export default obtenerTarjeta;