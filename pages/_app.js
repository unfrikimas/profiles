// import '../styles/globals.css'
// import '../styles/scss/profiles.scss'
import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';

const MyApp = props => {

  const usuario = useAutenticacion();
  const { Component, pageProps } = props;

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        usuario
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
    )
  }

export default MyApp;
