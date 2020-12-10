import React, { useState } from "react";
import { css } from "@emotion/react";
import Router from "next/router";
import Layout from "../components/layouts/Layout";
import { Error } from "../components/ui/Formulario";
import Link from 'next/link';

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
      const usuario = await firebase.login(email, password);
      console.log(usuario);
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al iniciar sesion", error.message);
      guardarError(error.message);
    }
  }

  return (
    <>
      <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
          <h1 className="text-2xl font-sans font-bold text-gray-800 text-center pt-5">
            Inicia sesión
          </h1>
          {/* { mensaje && <Alerta /> } */}
          <div className="flex justify-center mt-5">
            <div className="w-full max-w-lg">
              <form
                className="bg-white rounded-lg shadow-md px-8 pt-10 pb-10 mb-4"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="mb-4">
                  <input
                    className="text-xl  appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="text-xl appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                </div>
                {errores.password && <Error>{errores.password}</Error>}
                {error && <Error>{error}</Error>}
                <input
                  className="text-xl bg-red-500 hover:bg-gray-900 w-full rounded-lg p-4 text-white uppercase font-bold cursor-pointer mb-5"
                  type="submit"
                  value="Iniciar sesión"
                />
                <Link href="/crearcuenta">
                  <a className="block text-gray-800 text-right">Crear cuenta</a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IniciarSesion;
