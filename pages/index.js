import React, { useContext, useEffect } from 'react';
import Layout from '../components/layouts/Layout';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../firebase';

const Home = () => {

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  // const router = useRouter();

  // useEffect(() => {
  //   if(usuario === null) {
  //     router.push('/iniciarsesion')
  //   }
  // }, [usuario])

  return (
    <>
      <Layout>
        <button 
          onClick={ () => firebase.cerrarSesion() }
        >Cerrar sesión</button>        
      </Layout>
    </>
  )
}

export default Home;