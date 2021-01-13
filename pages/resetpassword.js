import React, { useState } from "react";
import Router from "next/router";
import { Error } from "../components/ui/Formulario";
import Link from 'next/link';
import Header from '../components/layouts/Header';

//importando firebase
import firebase from "../firebase";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarResetPassword from "../validacion/validarResetPassword";

const STATE_INICIAL = {
  email: ""
};

const ResetPassword = () => {
  const [error, guardarError] = useState(false);
    const [ mensajeCambioPassword, setMensajeCambioPassword ] = useState(false)

  const { valores, errores, handleSubmit, handleChange } = useValidacion(
    STATE_INICIAL,
    validarResetPassword,
    ResetPassword
  );

  //extraer datos del objeto valores
  const { email } = valores;

  async function ResetPassword() {
    // const usuario = firebase.auth.currentUser;
    await firebase.auth.sendPasswordResetEmail(email).then(function() {
        // Email sent.
        setMensajeCambioPassword(true)
      }).catch(function(error) {
        // An error happened.
        console.error("Hubo un error al iniciar sesion", error.message);
        guardarError(error.message);
      });
        // await firebase.login(email, password);
        //   Router.replace("/dashboard");
  }

  return (
    <>
    <div className="min-h-screen">
      <div className="container mx-auto px-4">

        <Header />

        { mensajeCambioPassword 
        ? 
            <>
            <h1 className="font-sans text-gray-600 pt-12 px-4">
                Si el correo existe en nuestra base de datos, recibirás un enlace para cambiar tu contraseña. Revisa en tu bandeja de entrada o en la carpeta de Spam.
            </h1>
            <Link href="/iniciarsesion">
                <a className="block text-center text-gray-600 hover:underline mt-8">
                    Regresar->
                </a>
            </Link>
            </>
        : 
            <div className="sm:w-lg mx-auto">
            <h1 className="text-xl font-sans font-bold text-gray-600 text-center pt-8">
                Cambiar contraseña
            </h1>
            {/* { mensaje && <Alerta /> } */}
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                <form
                    className="px-4"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <p className="text-gray-600 mb-4">Escribe el email que registraste y recibirás un enlace para cambiar tu contraseña.</p>
                    <div className="mb-4">
                    <input
                        className="text-lg appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100"
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        // onBlur={handleBlur}
                    />
                    </div>
                    {errores.password && <Error>{errores.password}</Error>}
                    {error && <Error>{error}</Error>}
                    <input
                    className="text-xl bg-principal hover:bg-principal-hover w-full pt-4 pb-5 text-white font-bold cursor-pointer mb-5 focus:outline-none"
                    type="submit"
                    value="Recibir enlace"
                    />
                    <Link href="/crearcuenta">
                    <a className="block text-gray-400 text-right mt-4">¿No tienes cuenta?</a>
                    </Link>
                </form>
                </div>
            </div>
            </div>

        }

      </div>
    </div>
    </>
  );
};

export default ResetPassword;
