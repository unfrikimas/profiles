import React from "react";
import Head from "next/head";
import IconFacebook from "../icons/socials/facebook";
import IconInstagram from '../icons/socials/instagram';

const TarjetaBasica = (props) => {

    console.log('componente', props.datos[0])
  
    const { urlimagenusuario, nombre, profesion, ubicacion, resumen, textoboton, numerocontacto, mediocontacto, redessociales } = props.datos[0]

    return (  
        <>
        <Head>
          <meta charSet="utf-8"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
          <title>{nombre} | Brevi Site</title>
          <meta name="description" content=""></meta>
          <meta name="keywords" content=""></meta>
          <meta name="author" content=""></meta>
          <script src="https://unpkg.com/popper.js@1/dist/umd/popper.min.js" />
          <script src="https://unpkg.com/tippy.js@4" />
        </Head>
  
        <body
          id="tarjeta"
          className="font-sans antialiased text-gray-900 leading-normal tracking-wider h-auto sm:h-screen bg-cover"
          style={{backgroundImage: `url(https://source.unsplash.com/QXbDyXXkRMI)`}}
        >
          <div className="max-w-4xl flex h-auto items-center flex-wrap mx-auto pt-32 pb-16 lg:my-0">
            
            <div
              id="profile"
              className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0"
            >
              <div className="p-4 md:p-12 text-center lg:text-left">
                <div
                  className="block lg:hidden rounded-full shadow-2xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${urlimagenusuario})`,
                  }}
                ></div>
  
                <h1 className="text-3xl font-bold pt-8 lg:pt-0" id="nombre">{nombre}</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start" id="profesion">
                {profesion}
                </p>
                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                  {ubicacion}
                </p>
                <p className="pt-8 text-sm" id="descripcion">
                  {resumen}
                </p>
  
                <div className="pt-12 pb-8">
                  <a 
                    className="tracking-wide bg-green-700 hover:bg-green-900 text-white text-xl font-bold py-3 px-6 rounded-full"
                    href={`https://api.whatsapp.com/send?phone=${numerocontacto}&text=Hola`}
                  >
                    {textoboton}
                  </a>
                </div>
  
                <div className="mt-6 pb-8 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-center lg:justify-start">
                  <a
                    className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                    href={`https://www.facebook.com/${redessociales[0].usuario}`}
                    target="_blank"
                  >
                    <IconFacebook />
                  </a>
                  <a
                    className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                    href={`https://www.instagram.com/${redessociales[0].usuario}`}
                    target="_blank"
                  >
                    <IconInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <img
                src={urlimagenusuario}
                className="rounded-none lg:rounded-lg shadow-3xl hidden lg:block"
              />
            </div>
  
            <div className="absolute top-0 right-0 h-12 w-18 p-4">
              <button className="js-change-theme focus:outline-none">🌙</button>
            </div>
          </div>
            <div className="bg-white text-center py-3 px-4 w-full lg:w-1/4 mx-auto lg:rounded-lg">
              <p>Hecho en <a className="text-purple-600 font-bold hover:underline" href="https://brevi.site/landing">Brevi</a></p>
            </div>
        </body>
      </>
    );

}
 
export default TarjetaBasica;