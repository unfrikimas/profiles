import React, { useContext } from "react";
import Link from 'next/link';
import HeaderUser from '../components/layouts/HeaderUser';
import Header from '../components/layouts/Header';
import { FirebaseContext } from '../firebase';

const Precios = () => {

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    <>
    <div className="min-h-screen">
      <div className="mx-auto">

        { usuario ?
          <HeaderUser
            usuario={usuario}
            firebase={firebase}  
          /> 
        :
          <Header />
        }


        <section className="mx-w-lg px-6 text-gray-600 body-font overflow-hidden">
          <div className="pt-8 pb-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Precios</h1>
              <p className="max-w-xl mx-auto leading-relaxed text-base text-gray-500">Comienza con la tarjeta web básica para darte a conocer; y, cuando tu proyecto crezca, estaré encantando de ayudarte.</p>
              {/* <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
                <button className="py-1 px-4 focus:outline-none">Annually</button>
              </div> */}
            </div>
            <div className="max-w-xl mx-auto flex flex-wrap -m-4">
              <div className="pt-2 px-2 pb-4 sm:w-1/2 w-full">
                <div 
                  className="h-full p-6 border-2 border-red-200 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BÁSICA</h2>
                  <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Gratis</h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-200 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Una plantilla
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-200 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>URL aleatoria
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-200 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Redes sociales
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-200 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Logo de Brevi
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-200 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>6 meses de hosting
                  </p>
                  <button 
                    className="flex items-center mt-auto text-gray-500 border border-red-200 py-2 px-4 w-full focus:outline-none">
                    <Link href="/p/claudiahernandez">
                      <a>
                        Ver demo
                      </a>
                    </Link>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p 
                    className="text-xs text-gray-500 mt-3 mb-4">
                    Excelente para darte a conocer y agrupar todas tus redes sociales en un único enlace.
                  </p>
                  <Link href="/">
                    <a
                      className="flex items-center justify-center font-bold mt-auto text-white bg-principal border-0 py-3 px-4 w-full focus:outline-none hover:bg-principal-hover tracking-wide">
                      { usuario ? "Ir al tablero" : "Crear tarjeta" }
                    </a>
                  </Link>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="h-full p-6 border-2 border-principal flex flex-col relative overflow-hidden">
                  <span className="bg-principal text-white px-3 pt-1 pb-1.5 tracking-widest text-xs absolute right-0 top-0">PERSONALIZADA</span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>$27</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">/desde</span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-principal text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Diseño personalizado
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-principal text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Fotos, texto y enlaces ilimitados
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-principal text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>URL con tu nombre
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-principal text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Sin logo de Brevi
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-principal text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Un año de hosting
                  </p>
                  <Link href="/cmasd">
                    <a
                      className="flex items-center mt-auto text-principal border border-principal py-2 px-4 w-full focus:outline-none">
                      Ver demo
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                  <p 
                    className="text-xs text-gray-500 mt-3 mb-4">
                    Cuando tu proyecto comience a crecer, vas a necesitar una tarjeta web que incluya más texto, fotos y enlaces.
                  </p>
                  <a
                    className="flex items-center justify-center font-bold mt-auto text-white bg-principal border-0 py-3 px-4 w-full focus:outline-none hover:bg-principal-hover tracking-wide"
                    href="https://api.whatsapp.com/send?phone=+34682811728&text=Hola, me interesa una tarjeta web personalizada" 
                  >
                    Contáctame
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
    </>
  );
};

export default Precios;
