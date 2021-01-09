import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../firebase';
import { useRouter } from 'next/router';
import formContext from '../context/form/formContext';

export const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined,
}

const useTarjeta = () => {

    //context de usuario
    const { usuario, firebase } = useContext(FirebaseContext);

    const [ consultar, setConsultar ] = useState(true);
    const [ objetoTarjeta, setObjetoTarjeta ] = useState({});

    //Routing
    const router = useRouter();

    console.log(usuario?.uid)

    useEffect(() => {

        //Si no hay usuario logueado, se redirecciona a al formulario
        if(usuario === USER_STATES.NOT_LOGGED) {
            router.push("/crearcuenta")
        }

        //si hay usuario y consulta
        if(usuario && consultar) {
            console.log('consultando')
            const consultaDB = async () => {
                await firebase.db
                    .collection('tarjetas')
                    .where('creador.id', '==', usuario.uid)
                    .get()
                    .then(snapshot => {
                        if (snapshot.empty) {
                            console.log('No ha creado una tarjeta');
                            setTarjetaObjeto(null)
                            setConsultar(false);
                        }
                        const datosTarjeta = snapshot.docs.map(doc => {
                            const data = doc.data()
                            return {
                            id: doc.id,
                            ...data,
                            }
                        })
                        console.log(datosTarjeta[0])
                        setConsultar(false);
                        setObjetoTarjeta(datosTarjeta[0])
                    })
                    .catch(err => {
                        console.log('Error', err)
                        setConsultar(false);
                    })
            }
            consultaDB();

        }

        // return () => {
        //     cleanup
        // }

        console.log(objetoTarjeta);

    }, [])


}
 
export default useTarjeta;