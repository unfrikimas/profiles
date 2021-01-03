import React from "react";
import Head from "next/head";
import Link from 'next/link';

const Landing = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>Crea una tarjeta web | Brevi Site</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"
        />
      </Head>

      <main className="mx-auto max-w-7xl px-4 md:mt-20 lg:mt-20 lg:px-8 xl:mt-30">
        <div className="text-center pt-32">
          <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              Presume tu tarjeta web en
              <span className="text-purple-600"> Brevi</span>
            </span>
          </h1>
          <p className="block px-2 mx-auto text-center items-center mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg lg:w-1/2 md:w-1/2 md:mt-5 md:text-xl">
            Crea una tarjeta web para mostrarle al mundo lo que sabes hacer!
            Colócala en la Biografía de tus redes sociales.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="https://api.whatsapp.com/send?phone=34682811728&text=Hola"
                target="_blank"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 md:py-4 md:text-lg md:px-10"
              >
                Contactar
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="/p/claudiahernandez">
                <a
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Demo en vivo
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Landing;
