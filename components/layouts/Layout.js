import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HeaderUser from './HeaderUser';
import { FirebaseContext } from '../../firebase';
import obtenerTarjeta from '../../utils/obtenerTarjeta';
import formContext from '../../context/form/formContext';

export const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined,
  }

const Layout = ({ children }) => {

    //context de usuario
    const { usuario, firebase } = useContext(FirebaseContext);

    //context para los datos de la tarjeta
    const FormContext = useContext(formContext);
    const { guardarTarjetaContext, noHayTarjeta } = FormContext;
  
    //routing
    const router = useRouter();
  
    const obtenerDatosTarjeta = (usuario) => {
      obtenerTarjeta(usuario)
        .then((newTarjeta) => {
          guardarTarjetaContext(newTarjeta)
          if(newTarjeta === undefined) {
            noHayTarjeta();
          }
        })
        .catch(err => {
          console.log('Error', err)
        })
    }
  
    //Si no hay usuario logueado, se redirecciona a al formulario
    useEffect(() => {
      if(usuario === USER_STATES.NOT_LOGGED) {
        router.replace("/crearcuenta")
      }
      let unsubscribe
      if(usuario) {
          unsubscribe = obtenerDatosTarjeta(usuario)
      }
      return () => unsubscribe && unsubscribe();
    }, [usuario])

    return (  
      <>
        <div className="">
            <div className="mx-auto">
                <HeaderUser 
                    usuario={usuario}
                    firebase={firebase}
                />
                <main>
                    { children }
                </main>
            </div>
        </div>
      </>
    );
}
 
export default Layout;