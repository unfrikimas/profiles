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
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const STATE_INICIAL = {
  nombre: "",
  email: "",
  password: "",
};

const CrearCuenta = () => {
  const [error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange } = useValidacion(
    STATE_INICIAL,
    validarCrearCuenta,
    crearCuenta
  );

  //extraer datos del objeto valores
  const { nombre, email, password } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al crear el usuario", error.message);
      guardarError(error.message);
    }
  }

  return (
    <>
      <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
          <h1 className="text-xl font-sans font-bold text-gray-600 text-center pt-8">
            Crea tu cuenta
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
                    className="text-lg appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100"
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                </div>
                {errores.nombre && <Error>{errores.nombre}</Error>}
                <div className="mb-4">
                  <input
                    className="text-lg  appearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100"
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
                    className="text-lg gappearance-none border w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100"
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
                  className="text-xl bg-principal hover:bg-principal-hover w-full p-4 text-white mb-5 font-bold cursor-pointer"
                  type="submit"
                  value="Crear cuenta"
                />
                <Link href="/iniciarsesion">
                  <a className="block text-gray-400 text-right mt-4">¿Ya tienes cuenta?</a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CrearCuenta;
