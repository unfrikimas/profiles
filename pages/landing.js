import React from "react";
import Head from "next/head";
import Link from 'next/link';
import HeaderCard from '../components/layouts/HeaderCard';

const Landing = () => {
  return (
    <>

      <main className="mx-auto max-w-lg px-4">
        <div className="text-center pt-32">
          <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900">
            <span className="block xl:inline">
              Presume tu tarjeta web en
              <span className="text-principal"> Brevi</span>
            </span>
          </h1>
          <p className="block px-2 mx-auto text-center items-center my-3 text-base text-gray-500">
            Crea una tarjeta web para mostrarle al mundo lo que sabes hacer!
            Colócala en la Biografía de tus redes sociales.
          </p>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <div className="mt-3">
              <Link href="/p/claudiahernandez">
                <a
                  className="w-56 flex items-center justify-center px-8 py-4 border border-principal text-base font-medium text-principal"
                >
                  Demo en vivo
                </a>
              </Link>
            </div>
            <div className="">
              <Link href="/crearcuenta">
                <a
                  className="w-56 flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium text-white bg-principal"
                >
                  Crear tarjeta
                </a>
              </Link>
            </div>
          </div>
          {/* <HeaderCard /> */}
        </div>
      </main>
    </>
  );
};

export default Landing;
