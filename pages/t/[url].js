import React, { useContext } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';
import styled from "@emotion/styled";
import firebase from '../../firebase/firebase';
import RedesSociales from '../../components/ui/RedesSociales';
import IconLocation from '../../components/icons/location'
import HeaderCard from '../../components/layouts/HeaderCard';

const Logo = styled.a`
  font-family: 'Playfair Display', serif;
  color: #fe2c55;
  font-size: 1.1rem;
  font-weight: 700;
`;

const Tarjeta = (props) => {

  // Routing para obtener la url de la tarjeta
  const router = useRouter();
  if (router.isFallback) return <h1 className="text-center pt-16">Cargando...</h1>

  if(!props.datos) {
    return (
      <p className="my-10 text-2xl text-center font-bold">No existe la tarjeta</p>
    )
  }

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  //datos de la tarjeta
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
      <title>{nombre.replace(/\b\w/g, l => l.toUpperCase())} | Brevi Site</title>
    </Head>

    { usuario && 
      <HeaderCard 
        usuario={usuario}
        firebase={firebase}  
      /> 
    }
    
    <div
      className="font-sans antialiased text-gray-900 leading-normal tracking-wider h-auto bg-cover"
      style={{backgroundImage: `url(https://source.unsplash.com/QXbDyXXkRMI)`}}
    >

      <div className={`w-full sm:max-w-lg flex min-h-screen items-center flex-wrap mx-auto ${usuario ? "pt-32" : "pt-32"} pb-16`}>
        
        <div
          className="w-full rounded-2xl shadow-xl bg-white opacity-90 mx-6"
        >
          <div className="p-4 text-center">
            <div
              className="block rounded-full shadow-2xl mx-auto -mt-24 h-48 w-48 bg-cover bg-top"
              style={{
                backgroundImage: `url(${urlimagenusuario})`,
              }}
            ></div>

            <h1 className="mx-auto text-3xl font-bold pt-8 tracking-tight" id="nombre">{nombre.replace(/\b\w/g, l => l.toUpperCase())}</h1>
            <div className="mx-auto w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center" id="profesion">
            {profesion}
            </p>
            <div className="flex justify-center items-center pt-1">
              <span className="fill-current text-green-700">
                <IconLocation width={15} heigth={15} />
              </span>
              <p className="text-gray-600 text-xs flex">
                {ubicacion.replace(/\b\w/g, l => l.toUpperCase())}
              </p>
            </div>
            <p className="pt-8 text-sm px-4" id="descripcion">
              {resumen}
            </p>

            <div className="pt-12 pb-8">
              { mediocontacto === "whatsapp" ?
                <a 
                  className="tracking-wide bg-green-700 hover:bg-green-900 text-white text-lg font-bold pt-3 pb-3.5 px-6 rounded-full items-center"
                  href={`https://api.whatsapp.com/send?phone=${numerocontacto}&text=Hola`}
                >
                  {textoboton.toUpperCase()}
                </a>                            
              :
                <a 
                  className="tracking-wide bg-green-700 hover:bg-green-900 text-white text-lg font-bold pt-3 pb-3.5 px-6 rounded-full items-center"
                  href={`tel:${numerocontacto}`}
                >
                  {textoboton.toUpperCase()}
                </a>                                          
              }
            </div>

            <div className="mt-6 pb-8 w-4/5 mx-auto flex flex-wrap items-center justify-center">
              { redessociales.map((red, index) => (
                <RedesSociales 
                  key={index}
                  red={red}
                />
              )) }
            </div>
          </div>
        </div>

        {!usuario && (
          <div className="text-white text-center w-full mx-auto mt-8">
            <p>
              Hecho en 
              <Link href="/">
                <Logo className="font-bold hover:text-principal-hover cursor-pointer"> Brevi</Logo>
              </Link>
            </p>
          </div>
        )}
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