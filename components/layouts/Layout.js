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
    const { guardarTarjetaContext } = FormContext;
  
    //routing
    const router = useRouter();
  
    const obtenerDatosTarjeta = (usuario) => {
      obtenerTarjeta(usuario)
        .then((newTarjeta) => {
          guardarTarjetaContext(newTarjeta);
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
            <Head>
                <meta charSet="utf-8"></meta>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
                <meta name="description" content=""></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <title>Tarjetas Webs | Brevi Site</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen">
                <div className="container mx-auto">
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