import React, { useState } from "react";
import Head from "next/head";
import axios from 'axios';
import IconCaptura from '../../components/icons/captura';
import IconPhone from '../../components/icons/phone';
import IconFacebook from '../../components/icons/socials/facebook';
import IconTwitter from '../../components/icons/socials/twitter';
import IconGitHub from '../../components/icons/socials/github';

const Card1 = () => {
 
  const [ urlImagen, setUrlImagen ] = useState('')
  const [ cargando, setCargando ] = useState(false)

  const subirACloudinary = async (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "brevisite");
    formData.append("file", files);
    setCargando(true);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/petportrait/upload`,
        formData
      );
      setUrlImagen(res.data.secure_url);
      setCargando(false);
    } catch (error) {
      console.log(error);
      setCargando(false);
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>My Profile Card</title>
        <meta name="description" content=""></meta>
        <meta name="keywords" content=""></meta>
        <meta name="author" content=""></meta>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"
        />
      </Head>

      <body
        className="font-sans antialiased text-gray-900 leading-normal tracking-wider sm:bg-no-repeat bg-cover"
        style={{backgroundImage: `url(https://source.unsplash.com/1L71sPT5XKc)`}}
      >
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-24 lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">     
                { !urlImagen 
                ?
                <div
                    className="block lg:hidden rounded-full shadow-2xl mx-auto border-2 border-dashed border-green-500 -mt-16 h-48 w-48 bg-cover bg-center bg-white mb-6 items-center" 
                >
                    <label className="flex flex-col items-center justify-center h-full w-full">
                        <span className="items-center">
                          <IconCaptura />
                        </span>
                        { cargando
                        ? <span className="mt-2">Subiendo foto...</span>
                        : <span className="mt-2">Sube una foto</span> }
                        <input
                            className="hidden"
                            type="file" 
                            name="fotografia"
                            onChange={subirACloudinary}
                        />
                    </label>
                </div>                  
                : 
                <div
                    className="block lg:hidden rounded-full shadow-2xl mx-auto border-2 border-dashed border-green-500 -mt-16 h-48 w-48 bg-cover bg-center bg-white mb-6 items-center" 
                    style={{backgroundImage: `url(${urlImagen})`}} 
                >
                    <label className="flex flex-col items-center justify-center h-48">
                        <IconCaptura stroke="#fff"/>
                        { cargando ? <span className="mt-2 text-white">Subiendo foto...</span> : null }
                        <input
                            className="hidden"
                            type="file" 
                            name="fotografia"
                            onChange={subirACloudinary}
                        />
                    </label>
                </div>  }

              <input 
                className="focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white w-full rounded-xl text-2xl text-center font-bold py-2 lg:pt-0 border-2 border-dashed border-green-500"
                type="text"
                id="nombre"
                name="nombre"
                autoComplete="off"
                placeholder="👶 Nombre"
                // onChange={e => agregarPassword(e.target.value) }
              />

              <div className="mx-auto lg:mx-0 w-4/5 pt-3 mb-3 border-b-2 border-green-500 opacity-25"></div>
              <input 
                className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white rounded-xl py-3 my-2 text-base text-center font-bold flex items-center justify-center lg:justify-start border-2 border-dashed border-green-500"
                type="text"
                id="profesion"
                name="profesion"
                autoComplete="off"
                placeholder="🎓 Qué haces"
                // onChange={e => agregarPassword(e.target.value) }
              />

              <input 
                className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white rounded-xl py-3 my-2 text-base lg:text-sm text-center font-bold flex items-center justify-center lg:justify-start border-2 border-dashed border-green-500"
                type="text"
                id="ubicacion"
                name="ubicacion"
                autoComplete="off"
                placeholder="🗽 Dónde estás"
                // onChange={e => agregarPassword(e.target.value) }
              />

              <textarea
                className="resize-none w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white h-36 rounded-xl mt-2 text-sm border-2 border-dashed border-green-500 px-2 py-2"
                id="resumen"
                name="resumen"
                autoComplete="off"
                placeholder="🚀 A qué te dedicas"
                // value={''}
                // onChange={''}
              />

              <input 
                className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white rounded-xl py-3 mt-8 mb-4 text-base lg:text-sm text-center font-bold flex items-center justify-center lg:justify-start border-2 border-dashed border-green-500"
                type="text"
                id="boton"
                name="boton"
                autoComplete="off"
                placeholder="TEXTO BOTÓN CONTACTO"
                // onChange={e => agregarPassword(e.target.value) }
              />

              <div>
                <div className="mt-1 relative rounded-md">
                  <div className="absolute inset-y-1 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">
                      <IconPhone width={30} height={30}/>
                    </span>
                  </div>
                  <input 
                    className="w-full focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-md" 
                    placeholder="Número contacto"
                    autoComplete="off"
                    type="text" 
                    name="numero" 
                    id="numero" 
                  />
                  <div className="absolute inset-y-0 right-2 flex items-center">
                    <label htmlFor="contacto" className="sr-only">Contacto</label>
                    <select 
                      className="focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-opacity-50 focus:border-white py-2 pl-2 sm:text-sm rounded-md leading-8"
                      id="numero" 
                      name="numero" 
                    >
                      <option className="py-4">WHATSAPP</option>
                      <option>TELÉFONO</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="rounded-xl my-8 py-2 px-4 lg:pb-0  lg:w-full mx-auto flex flex-wrap items-center justify-between border-2 border-dashed border-green-500">
                <a
                  className="h-6 w-6 fill-current text-gray-500 hover:text-green-700"
                  href="#"
                >
                  <IconFacebook />
                </a>
                <a
                  className="h-6 w-6 fill-current text-gray-500 hover:text-green-700"
                  href="#"
                >
                  <IconTwitter />
                </a>
                <a
                  className="h-6 w-6 fill-current text-gray-500 hover:text-green-700"
                  href="#"
                >
                  <IconGitHub />
                </a>
                <a
                  className="link"
                  href="#"
                  data-tippy-content="@unsplash_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Unsplash</title>
                    <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
                  </svg>
                </a>
                <a
                  className="link"
                  href="#"
                  data-tippy-content="@dribble_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Dribbble</title>
                    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                  </svg>
                </a>
                <a
                  className="link"
                  href="#"
                  data-tippy-content="@instagram_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a
                  className="link"
                  href="#"
                  data-tippy-content="@youtube_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-green-700"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>YouTube</title>
                    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <img
              src="https://source.unsplash.com/MP0IUfwrn0A"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </body>
    </>
  );
};

export default Card1;
