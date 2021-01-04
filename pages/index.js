import React, { useContext, useEffect } from 'react';
import styled from "@emotion/styled";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../firebase';

const Logo = styled.a`
  font-family: 'Playfair Display', serif;
  color: #fe2c55;
  font-size: 2rem;
  font-weight: 700;
`;

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

const Home = () => {

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);
  const router = useRouter();

  useEffect(() => {
    usuario === USER_STATES.NOT_LOGGED && router.push("/crearcuenta")
  }, [usuario])

  return (
    <>
      <div className="flex flex-col min-h-screen max-w-lg">
        <header className="h-16 py-2 px-4 border-1 border-b border-gray-300">
          <div className="flex justify-between items-center">
            <Logo>Brevi</Logo>
            <div className="text-gray-500">
              { usuario && <p>{ usuario.displayName.replace(/\b\w/g, l => l.toUpperCase()) }</p> }
            </div>
          </div>
        </header>
        <section className="flex-1">
          <div className="px-8">
            <div className="mt-32 py-2 bg-red-200 text-xl text-gray-700 text-center">
              <p>No has creado tu tarjeta web</p>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <a
                className="px-6 pt-4 pb-5 text-xl font-bold text-principal border border-principal" 
                href="#">
                Crear tarjeta web
              </a>
            </div>
          </div>
        </section>
        <footer className="h-12 border-1 border-t border-gray-300">
          <div>

          </div>
        </footer>
      </div>



      {/* { usuario
      ? 
      <button 
        onClick={ () => firebase.cerrarSesion() }
      >Cerrar sesión</button>        
      : null } */}
    </>
  )
}

export default Home;