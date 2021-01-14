import React, { useState } from "react";
import Link from 'next/link';
import Header from '../components/layouts/Header';

const Precios = () => {


  return (
    <>
    <div className="min-h-screen">
      <div className="mx-auto px-4">

        <Header />

        <section className="mx-w-lg text-gray-600 body-font overflow-hidden">
          <div className="px-2 pt-8 pb-24 mx-auto">
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
                <div className="h-full p-6 border-2 border-red-200 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BÁSICA</h2>
                  <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Gratis</h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-200 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Una plantilla
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-200 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>URL aleatoria
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-200 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Redes sociales
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-200 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Logo de Brevi
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-200 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
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
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">Excelente para darte a conocer y agrupar todas tus redes sociales en un único enlace.</p>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="h-full p-6 border-2 border-principal flex flex-col relative overflow-hidden">
                  <span className="bg-principal text-white px-3 pt-1 pb-2 tracking-widest text-xs absolute right-0 top-0">MÁS USADA</span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>$27</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">/desde</span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-principal text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Plantilla personalizada
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-principal text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>URL con tu nombre
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-principal text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Redes sociales
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-principal text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Sin logo de Brevi
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-principal text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Un año de hosting
                  </p>
                  <button 
                    className="flex items-center mt-auto text-white bg-principal border-0 py-2 px-4 w-full focus:outline-none hover:bg-principal-hover">
                    <Link href="/cmasd">
                      <a>
                        Ver demo
                      </a>
                    </Link>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">Cuando tu proyecto comience a crecer, vas a necesitar una tarjeta web que incluya más texto, fotos y enlaces.</p>
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
