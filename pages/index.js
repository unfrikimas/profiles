import React, { useContext, useEffect, useState } from 'react';
import styled from "@emotion/styled";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../firebase';
import { Transition } from '@headlessui/react'

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

  //Estado para el dropdown
  const [ menuDropDown, setMenuDropDown ] = useState(false)

  const handleClickMenu = () => {
    if(menuDropDown) {
      setMenuDropDown(false)
    } else {
      setMenuDropDown(true)
    } 
  }

  return (
    <>
      <div className="flex flex-col min-h-screen max-w-lg mx-auto">
        <header className="h-16 py-2 px-4 border-1 border-b border-gray-300">
          <div className="flex justify-between items-center">
            <Logo>Brevi</Logo>

            <div className="text-gray-500">
              { usuario && (             
              <>

                <div className="relative inline-block text-left">
              
                  <div>
                    <button 
                      type="button" 
                      className="inline-flex justify-center w-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-principal-hover" 
                      id="options-menu"
                      aria-haspopup="true" 
                      aria-expanded="true"
                      onClick={ () => setMenuDropDown(!menuDropDown) }
                      onBlur={ () => setMenuDropDown(false) }
                    >
                      { usuario.displayName.replace(/\b\w/g, l => l.toUpperCase()) }
                      
                      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  <Transition
                    show={menuDropDown}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >

                    {(ref) => (

                      <div ref={ref} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Tu cuenta</a>

                          <button 
                            type="submit" 
                            className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" 
                            role="menuitem"
                            onClick={ () => firebase.cerrarSesion() }
                          >
                            Cerrar sesión
                          </button>

                        </div>
                      </div>

                    )}
                  </Transition>           
                </div>  

              </>            
              )}

            </div>
          </div>
        </header>

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
