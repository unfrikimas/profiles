import React, { useContext, useEffect } from 'react';
import Layout from '../components/layouts/Layout';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../firebase';

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

const Home = () => {

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);
  const router = useRouter();

  useEffect(() => {
    usuario === USER_STATES.NOT_LOGGED && router.push("/landing")
  }, [usuario])

  return (
    <>
      <Layout>
        { usuario
        ? 
        <button 
          onClick={ () => firebase.cerrarSesion() }
        >Cerrar sesión</button>        
        : null }
      </Layout>
    </>
  )
}

export default Home;