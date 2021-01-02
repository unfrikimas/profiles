import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import firebase from '../../firebase/firebase';
import IconFacebook from "../../components/icons/socials/facebook";
import IconInstagram from '../../components/icons/socials/instagram';

const Tarjeta = (props) => {

  // Routing para obtener la url de la tarjeta
  const router = useRouter();
  if (router.isFallback) return <h1>Cargando...</h1>

  if(!props.datos) {
    return (
      <p className="my-10 text-2xl text-center font-bold">No existe la tarjeta</p>
    )
  }

  const { urlimagenusuario, nombre, profesion, ubicacion, resumen, textoboton, numerocontacto, mediocontacto, redessociales } = props.datos[0]

  // if (process.browser) {
    //Init tooltips
    // tippy(".link", {
    //   placement: "bottom",
    // });

  //   //Toggle mode
  //   const toggle = document.querySelector(".js-change-theme");
  //   const body = document.querySelector("body");
  //   const profile = document.getElementById("profile");
  //   const descripcion = document.getElementById("descripcion");
  //   const nombre = document.getElementById("nombre");
  //   const profesion = document.getElementById("profesion");

  //   toggle.addEventListener("click", () => {
  //     if (body.classList.contains("text-gray-900")) {
  //       toggle.innerHTML = "☀️";
  //       body.classList.remove("text-gray-900");
  //       descripcion.classList.remove("text-gray-900");
  //       nombre.classList.remove("text-gray-900");
  //       profesion.classList.remove("text-gray-900");
  //       body.classList.add("text-gray-100");
  //       descripcion.classList.add("text-gray-100");
  //       nombre.classList.add("text-gray-100");
  //       profesion.classList.add("text-gray-100");
  //       profile.classList.remove("bg-white");
  //       profile.classList.add("bg-gray-900");
  //     } else {
  //       toggle.innerHTML = "🌙";
  //       body.classList.remove("text-gray-100");
  //       descripcion.classList.remove("text-gray-100");
  //       nombre.classList.remove("text-gray-100");
  //       profesion.classList.remove("text-gray-100");
  //       body.classList.add("text-gray-900");
  //       descripcion.classList.add("text-gray-900");
  //       nombre.classList.add("text-gray-900");
  //       profesion.classList.add("text-gray-900");
  //       profile.classList.remove("bg-gray-900");
  //       profile.classList.add("bg-white");
  //     }
  //   });
  // }  

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

    <div
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
    </div>
    </>    

  )

}

export async function getStaticPaths() {

  const resultado = await fetch(`${process.env.frontendURL}/api/tarjetas`)
  const tarjetas = await resultado.json()

  return {
    paths: tarjetas.tarjetas.map(tarjeta => ({
      params: { url: tarjeta.url }
    })),
    fallback: true
  }

  // return {
  //   paths: [{ params: { url: "x2qHVlhPS" } }],
  //   fallback: true,
  // }


}
  
export async function getStaticProps(context) {

  const { params } = context
  const { url } = params
  console.log(params)
  console.log(url)

  return await firebase.db
    .collection('tarjetas')
    .where('url', '==', url)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No existe esta tarjeta');
        return { props: {} }
      }
      const datos = snapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          ...data,
        }
      }) 
      return {
        props: { 
          datos, 
        },
      }
      // console.log(datos.id, '=>', datos)
    })
    .catch(err => {
      console.log('Error', err)
      return { props: {} }
    })

}

export default Tarjeta;