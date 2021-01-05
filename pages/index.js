import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../firebase';
import HeaderUser from '../components/layouts/HeaderUser';

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

const Home = () => {

  //context de usuario
  const { usuario } = useContext(FirebaseContext);

  //Routing
  const router = useRouter();

  //Si no hay usuario logueado, se redirecciona a al formulario
  useEffect(() => {
    usuario === USER_STATES.NOT_LOGGED && router.push("/crearcuenta")
  }, [usuario])


  return (
    <>
      <div className="flex flex-col min-h-screen max-w-lg mx-auto">

        <HeaderUser />

        <section className="flex-1">
          <div className="px-8">
            <div className="mt-48 py-2 bg-red-200 text-lg text-gray-600 text-center">
              <p>No has creado tu tarjeta web</p>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <Link href="/p/card1">
                <a
                  className="px-6 pt-4 pb-5 text-xl font-bold text-principal border border-principal" 
                  href="#">
                  Crear tarjeta web
                </a>
              </Link>
            </div>
          </div>
        </section>

        <footer className="h-12 border-1 border-t border-gray-300">
          <div>

          </div>
        </footer>
      </div>

    </>
  )
}

export default Home;
