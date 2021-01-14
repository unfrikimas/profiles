import React from "react";
import Head from "next/head";
import Link from 'next/link';
import styled from "@emotion/styled";
import IconFacebook from "../../components/icons/socials/facebook";
import IconInstagram from '../../components/icons/socials/instagram';
import IconLocation from '../../components/icons/location';

const Logo = styled.a`
  font-family: 'Playfair Display', serif;
  color: #fe2c55;
  font-size: 1.1rem;
  font-weight: 700;
`;


const ClaudiaHernandez = () => {
    
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>Claudia Hernández | Brevi Site</title>
      </Head>

      <div
        className="z-0 font-sans antialiased text-gray-900 leading-normal tracking-wider h-auto bg-cover"
       style={{backgroundImage: `url(https://source.unsplash.com/QXbDyXXkRMI)`}}
      >
        <div className="w-full sm:max-w-lg flex min-h-screen items-center flex-wrap mx-auto $ pt-32 pb-8">
          
          <div
            className="w-full rounded-2xl shadow-xl bg-white opacity-90 mx-6"
          >
            <div className="p-4 text-center">
              <div
                className="block rounded-full shadow-2xl mx-auto -mt-24 h-48 w-48 bg-cover bg-top"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/petportrait/image/upload/v1607881780/brevi_site/n37wruh5pqqhsznci2un.jpg)`,
                }}
              ></div>

              <h1 
                className="mx-auto text-3xl font-bold pt-8 tracking-tight" 
                id="nombre">
                Claudia Hernández
              </h1>

              <div className="mx-auto w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              
              <p 
                className="pt-4 text-base font-bold flex items-center justify-center" id="profesion">
                Me gusta tejer, tejer y tejer
              </p>

              <div className="flex justify-center items-center pt-1">
                <span className="fill-current text-green-700">
                  <IconLocation width={15} heigth={15} />
                </span>
                <p 
                  className="text-gray-600 text-xs flex">
                  Lake Charles, USA
                </p>
              </div>

              <p 
                className="pt-8 text-sm px-4" id="descripcion">
                🍒 Ocurrente, Amo Sonreir, Madre de un Adolescente, mi vida está donde sea Feliz, Capricorniana, Empresaria, Positiva, Fiel a DIOS y Venezolana!
              </p>

              <div className="pt-12 pb-8">
                <a 
                  className="tracking-wide bg-green-700 hover:bg-green-900 text-white text-lg font-bold pt-3 pb-3.5 px-6 rounded-full items-center"
                  href={`https://api.whatsapp.com/send?phone=+17867607072&text=Hola`}
                  target="_blank"
                >
                  CONTÁCTAME
                </a>
              </div>

              <div 
                className="mt-8 mb-10 w-4/5 mx-auto flex flex-wrap items-center justify-center"
              >
                <a
                  className="mx-3 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                  href="https://www.facebook.com/claudia.p.hernandez"
                  target="_blank"
                >
                  <IconFacebook />
                </a>
                <a
                  className="mx-3 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                  href="https://www.instagram.com/crochet.byclau/"
                  target="_blank"
                >
                  <IconInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="text-white text-center w-full mx-auto mt-8">
            <p>
              Hecho en 
              <Link href="/">
                <Logo className="font-bold hover:text-principal-hover cursor-pointer"> Brevi</Logo>
              </Link>
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default ClaudiaHernandez;
