import React, { useState } from "react";
import { css } from "@emotion/react";
import Router from "next/router";
import Layout from "../components/layouts/Layout";
import { Error } from "../components/ui/Formulario";
import Link from 'next/link';
import Header from '../components/layouts/Header';

//importando firebase
import firebase from "../firebase";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/validarIniciarSesion";

const STATE_INICIAL = {
  email: "",
  password: "",
};

const IniciarSesion = () => {
  const [error, guardarError] = useState(false);
  const { valores, errores, handleSubmit, handleChange } = useValidacion(
    STATE_INICIAL,
    validarIniciarSesion,
    iniciarSesion
  );

  //extraer datos del objeto valores
  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.replace("/dashboard");
    } catch (error) {
      console.error("Hubo un error al iniciar sesion", error.message);
      guardarError(error.message);
    }
  }

  return (
    <>
    <div className="min-h-screen">
      <div className="container mx-auto px-4">

        <Header />

        <div className="sm:w-lg mx-auto">
          <h1 className="text-xl font-sans font-bold text-gray-600 text-center pt-8">
            Inicia Sesión
          </h1>
          {/* { mensaje && <Alerta /> } */}
          <div className="flex justify-center mt-5">
            <div className="w-full max-w-lg">
              <form
                className="px-4"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="mb-4">
                  <input
                    className="text-lg appearance-none border w-full py-4 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100"
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                </div>
                {errores.email && <Error>{errores.email}</Error>}
                <div className="mb-4">
                  <input
                    className="text-lg appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100"
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                </div>
                {errores.password && <Error>{errores.password}</Error>}
                {error && <Error>{error}</Error>}
                <input
                  className="text-xl bg-principal hover:bg-principal-hover w-full p-4 text-white font-bold cursor-pointer mb-5 focus:outline-none"
                  type="submit"
                  value="Iniciar sesión"
                />
                <Link href="/crearcuenta">
                  <a className="block text-gray-400 text-right mt-4">¿No tienes cuenta?</a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default IniciarSesion;
