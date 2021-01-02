import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import firebase from '../../firebase/firebase';
import IconFacebook from "../../components/icons/socials/facebook";
import IconInstagram from '../../components/icons/socials/instagram';
import IconLinkedin from '../../components/icons/socials/linkedin';
import IconTwitter from '../../components/icons/socials/twitter';
import IconYoutube from '../../components/icons/socials/youtube';
import IconTikTok from '../../components/icons/socials/tiktok';
import IconPinterest from '../../components/icons/socials/pinterest';
import IconDribbble from '../../components/icons/socials/dribbble';
import IconBehance from '../../components/icons/socials/behance';

const Tarjeta = (props) => {

  // Routing para obtener la url de la tarjeta
  const router = useRouter();
  if (router.isFallback) return <h1>Cargando...</h1>

  if(!props.datos) {
    return (
      <p className="my-10 text-2xl text-center font-bold">No existe la tarjeta</p>
    )
  }

  const { datos } = props

  const { urlimagenusuario, nombre, profesion, ubicacion, resumen, textoboton, numerocontacto, mediocontacto, redessociales } = datos

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
    </Head>

    <div
      className="font-sans antialiased text-gray-900 leading-normal tracking-wider h-auto bg-cover"
      style={{backgroundImage: `url(https://source.unsplash.com/QXbDyXXkRMI)`}}
    >
      <div className="w-full sm:max-w-lg flex min-h-screen items-center flex-wrap mx-auto pt-24 pb-16 sm:my-0">
        
        <div
          className="w-full rounded-3xl shadow-xl bg-white opacity-90 mx-4"
        >
          <div className="p-4 text-center">
            <div
              className="block rounded-full shadow-2xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${urlimagenusuario})`,
              }}
            ></div>

            <h1 className="mx-auto text-3xl font-bold pt-8 tracking-tight" id="nombre">{nombre.replace(/\b\w/g, l => l.toUpperCase())}</h1>
            <div className="mx-auto w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center" id="profesion">
            {profesion.replace(/\b\w/g, l => l.toUpperCase())}
            </p>
            <p className="pt-2 text-gray-600 text-xs flex items-center justify-center">
              {ubicacion.replace(/\b\w/g, l => l.toUpperCase())}
            </p>
            <p className="pt-8 text-sm" id="descripcion">
              {resumen}
            </p>

            <div className="pt-12 pb-8">
              <a 
                className="tracking-wide bg-green-700 hover:bg-green-900 text-white text-lg font-bold pt-3 pb-3.5 px-6 rounded-full items-center"
                href={`https://api.whatsapp.com/send?phone=${numerocontacto}&text=Hola`}
              >
                {textoboton.toUpperCase()}
              </a>
            </div>

            <div className="mt-6 pb-8 w-4/5 mx-auto flex flex-wrap items-center justify-center">
              { redessociales.map(red => (

                red.redsocial === "facebook" ?
                  <a
                    className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                    href={`https://www.facebook.com/${red.usuario}`}
                    target="_blank"
                  >
                    <IconFacebook />
                  </a>
                : red.redsocial === "instagram" ? 
                  <a
                    className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                    href={`https://www.instagram.com/${red.usuario}`}
                    target="_blank"
                  >
                    <IconInstagram />
                  </a>
                  : red.redsocial === "linkedin" ? 
                    <a
                      className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                      href={`https://www.linkedin.com/in/${red.usuario}`}
                      target="_blank"
                    >
                      <IconLinkedin />
                    </a>
                    : red.redsocial === "twitter" ? 
                      <a
                        className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                        href={`https://twitter.com/${red.usuario}`}
                        target="_blank"
                      >
                        <IconTwitter />
                      </a>
                      : red.redsocial === "youtube" ? 
                        <a
                          className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                          href={`https://www.youtube.com/c/${red.usuario}`}
                          target="_blank"
                        >
                          <IconYoutube />
                        </a>
                        : red.redsocial === "tiktok" ? 
                          <a
                            className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                            href={`https://www.tiktok.com/@${red.usuario}`}
                            target="_blank"
                          >
                            <IconTikTok />
                          </a>
                          : red.redsocial === "pinterest" ? 
                            <a
                              className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                              href={`https://www.pinterest.es/${red.usuario}`}
                              target="_blank"
                            >
                              <IconPinterest />
                            </a>
                            : red.redsocial === "dribbble" ? 
                              <a
                                className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                                href={`https://dribbble.com/${red.usuario}`}
                                target="_blank"
                              >
                                <IconDribbble />
                              </a>
                              : red.redsocial === "behance" ? 
                                <a
                                  className="mx-2 h-8 w-8 fill-current text-gray-500 hover:text-green-700"
                                  href={`https://www.behance.net/${red.usuario}`}
                                  target="_blank"
                                >
                                  <IconBehance />
                                </a>

                                : null
              )) }
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 h-12 w-18 p-4">
          <button className="js-change-theme focus:outline-none">🌙</button>
        </div>
        <div className="text-white text-center w-full mx-auto mt-8">
          <p>Hecho en <a className="text-purple-600 font-bold hover:underline" href="https://brevi.site/landing">Brevi</a></p>
        </div>
      </div>
    </div>
    </>    

  )

}

export async function getStaticPaths() {

  const tarjetas = await firebase.db.collection("tarjetas").get()
  const paths = tarjetas.docs.map(tarjeta => ({
    params: {
      url: tarjeta.data().url
    }
  }));

  return {
    paths,
    fallback: true
  }  

}
  
export async function getStaticProps(context) {

  const { params } = context
  const { url } = params

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
          datos: datos[0]
        }
      }
      // console.log(datos.id, '=>', datos)
    })
    .catch(err => {
      console.log('Error', err)
      return { props: {} }
    })

}

export default Tarjeta;