import React from 'react';
import firebase from '../firebase';

export const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined,
}

function obtenerTarjeta(usuario) {

        // //Si no hay usuario logueado, se redirecciona a al formulario
        // if(usuario === USER_STATES.NOT_LOGGED) {
        //     router.push("/crearcuenta")
        // }

        //si hay usuario y consulta
        console.log(usuario)
        if(usuario) {
            console.log('consultando')
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
                        console.log(datosTarjeta[0])
                        return datosTarjeta[0]
                    })
                    .catch(err => {
                        console.log('Error', err)
                    })
            }
            return consultaDB();

        }

        // return () => {
        //     cleanup
        // }

    // }, [])


}
 
export default obtenerTarjeta;