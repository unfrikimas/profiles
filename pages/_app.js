import '../styles/globals.css'
// import '../styles/scss/profiles.scss'
import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';
import FormState from '../context/form/formState';

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
      <FormState>
        <Component {...pageProps} />
      </FormState>
    </FirebaseContext.Provider>
    )
  }

export default MyApp;
