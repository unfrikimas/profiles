import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';
import formContext from '../../context/form/formContext';
import HeaderUser from '../../components/layouts/HeaderUser';
import obtenerTarjeta from '../../utils/obtenerTarjeta';
import Layout from '../../components/layouts/Layout';

export const ID_CARD_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

const DashBoard = () => {

    const [ tarjeta, setTarjeta ] = useState(null);

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  //context para los datos de la tarjeta
  const FormContext = useContext(formContext);
  const { id, urlTarjeta } = FormContext;

  //Routing
  const router = useRouter();

//   //Si no hay usuario logueado, se redirecciona a al formulario
//   useEffect(() => {
//     if(usuario === USER_STATES.NOT_LOGGED) {
//       router.replace("/crearcuenta")
//     }
//     let unsubscribe
//     if(usuario) {
//         unsubscribe = obtenerDatosTarjeta(usuario)
//     }
//     return () => unsubscribe && unsubscribe();
//   }, [usuario])

//   const obtenerDatosTarjeta = (usuario) => {
//     obtenerTarjeta(usuario)
//       .then((newTarjeta) => {
//         guardarTarjetaContext(newTarjeta);
//         setTarjeta(newTarjeta);
//       })
//   }



  //funcion que copia el enlace
  const copiarEnlace = () => {
    navigator.clipboard.writeText(`https://brevi.site/t/${urlTarjeta}`);
    document.getElementById('copiarEnlace').innerHTML="¡Copiado!";
    setTimeout(() => {
        document.getElementById('copiarEnlace').innerHTML="Copiar enlace";
    }, 700);
  };

  return (
    <>

      {/* <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>Tarjetas web | Brevi Site</title>
      </Head> */}

      <Layout>

      <div className="flex flex-col min-h-screen max-w-lg mx-auto">

        { usuario && id === '0' ?

          <section className="flex-1">
            <div className="px-8">
              <div className="mt-48 py-2 bg-red-200 text-lg text-gray-600 text-center">
                <p>No has creado tu tarjeta web</p>
              </div>
              <div className="mt-6 flex justify-center items-center">
                <Link href="/p/card1">
                  <a
                    className="w-56 text-center px-6 pt-3 pb-3.5 text-lg font-bold text-principal border border-principal" 
                    href="#">
                    Crear tarjeta web
                  </a>
                </Link>
              </div>
            </div>
          </section>

        : usuario && id && id !== '0' ?

          <section className="flex-1">
            <div className="px-8">
              <div className="mt-24 py-2 px-2 mx-4 bg-green-200 text-lg text-gray-600 text-center">
                <p>¡Ya tienes una tarjeta web!<br></br>Copia el enlace y pégalo en tus redes sociales.</p>
              </div>
              <div className="mt-6 flex flex-col justify-center items-center">
                <button 
                  className="w-56 text-center mb-4 px-6 pt-2.5 pb-3 text-lg focus:outline-none text-principal border border-principal"
                  type="button"
                  id="copiarEnlace"
                  onClick={ () => copiarEnlace() }
                >
                  Copiar enlace
                </button>              
                <Link href="/p/card1">
                  <a
                    className="w-56 px-6 pt-3 pb-3.5 text-center text-lg font-bold bg-principal hover:bg-principal-hover text-white" 
                    href="#">
                    Editar tarjeta web
                  </a>
                </Link>
              </div>
            </div>
          </section>

          : 

            <section className="flex-1">
                <p className="text-center pt-48">Cargando...</p>
            </section>

        }

        <footer className="h-12 border-1 border-t border-gray-300">
          <div>

          </div>
        </footer>

      </div>
      </Layout>

    </>
  )
}

export default DashBoard;