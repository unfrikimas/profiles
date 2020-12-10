import React, { useContext } from 'react';
import Layout from '../components/layouts/Layout';
import Router from 'next/router';
import { FirebaseContext } from '../firebase';

const Home = () => {

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  if(!usuario) {
    Router.push("/iniciarsesion");
  }

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