import React, { useEffect, useState }  from 'react';
import Head from 'next/head';
import '../styles/globals.css'
import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';
import FormState from '../context/form/formState';

const MyApp = props => {

  const usuario = useAutenticacion();

  const { Component, pageProps } = props;

  return (
    <>

    <Head>
      <meta charSet="utf-8"></meta>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
      <meta name="description" content=""></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <title>La tarjeta web para tus redes sociales | Brevi Site</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      {/* <link rel="mask-icon" href="logo-brevi.svg" color="#5bbad5"/> */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
    </Head>

    <FirebaseContext.Provider
      value={{
        firebase,
        usuario
      }}
    >
      <FormState>
        <Component {...pageProps} />
      </FormState>
    </FirebaseContext.Provider>
    </>
    )
  }

export default MyApp;
