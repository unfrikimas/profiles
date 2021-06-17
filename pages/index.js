import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../firebase';
import formContext from '../context/form/formContext';
import HeaderUser from '../components/layouts/HeaderUser';

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

const Home = () => {

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  //context para los datos de la tarjeta
  const FormContext = useContext(formContext);
  const { guardarTarjetaContext } = FormContext;

  //state de la tarjeta web del usuario
  const [ tarjeta, setTarjeta ] = useState(null);
  const [ consultar, setConsultar ] = useState(true);

  //Routing
  const router = useRouter();

  //Si no hay usuario logueado, se redirecciona a al formulario
  useEffect(() => {
    if(usuario === USER_STATES.NOT_LOGGED) {
      router.push("/crearcuenta")
    }
    if(usuario) {
      router.replace("/dashboard")
    }
  }, [usuario])

  //funcion que copia el enlace
  const copiarEnlace = () => {
    navigator.clipboard.writeText(`https://brevi.site/t/${tarjeta.url}`);
    document.getElementById('copiarEnlace').innerHTML="¡Copiado!";
    setTimeout(() => {
        document.getElementById('copiarEnlace').innerHTML="Copiar enlace";
    }, 700);
  };

  return (
    <>

      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>       
        <title>Tarjetas web | Brevi Site</title>
      </Head>

      <div className="flex flex-col min-h-screen max-w-lg mx-auto">

        <HeaderUser 
          usuario={usuario}
          firebase={firebase}
        />

        { usuario && tarjeta === undefined ?

          <section className="flex-1">
            <div className="px-8">
              <div className="mt-48 py-2 bg-red-200 text-lg text-gray-600 text-center">
                <p>No has creado tu tarjeta web</p>
              </div>
              <div className="mt-6 flex justify-center items-center">
                <Link href="/p/card1">
                  <a
                    className="w-56 px-6 pt-4 pb-5 text-xl font-bold text-principal border border-principal" 
                    href="#">
                    Crear tarjeta web
                  </a>
                </Link>
              </div>
            </div>
          </section>

        : usuario && tarjeta ?

          <section className="flex-1">
            <div className="px-8">
              <div className="mt-24 py-2 px-2 bg-green-200 text-lg text-gray-600 text-center">
                <p>¡Ya tienes una tarjeta web!<br></br>Copia el enlace y pégalo en tus redes sociales.</p>
              </div>
              <div className="mt-6 flex flex-col justify-center items-center">
                <button 
                  className="w-56 mb-4 px-6 pt-4 pb-5 text-xl focus:outline-none text-principal border border-principal"
                  type="button"
                  id="copiarEnlace"
                  onClick={ () => copiarEnlace() }
                >
                  Copiar enlace
                </button>              
                <Link href="/p/card1">
                  <a
                    className="w-56 px-6 pt-4 pb-5 text-center text-xl font-bold bg-principal text-white" 
                    href="#">
                    Editar tarjeta web
                  </a>
                </Link>
              </div>
            </div>
          </section>

          : null
        }

        <footer className="h-12 border-1 border-t border-gray-300">
          <div>

          </div>
        </footer>

      </div>

    </>
  )
}

export default Home;
