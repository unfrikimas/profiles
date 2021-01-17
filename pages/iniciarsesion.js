import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Error } from "../components/ui/Formulario";
import Link from 'next/link';
import Header from '../components/layouts/Header';
import IconUser from '../components/icons/form/user';

//importando firebase
import { FirebaseContext } from '../firebase';

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/validarIniciarSesion";

const STATE_INICIAL = {
  email: "",
  password: "",
};

const IniciarSesion = () => {

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  const [error, guardarError] = useState(false);
  const { valores, errores, handleSubmit, handleChange } = useValidacion(
    STATE_INICIAL,
    validarIniciarSesion,
    iniciarSesion
  );

  //extraer datos del objeto valores
  const { email, password } = valores;

  const router = useRouter();

  //Si hay usuario logueado, se redirecciona al dashboard
  useEffect(() => {
    if(usuario) {
      router.replace("/dashboard")
    }
  }, [usuario])

  async function iniciarSesion() {
    try {
      await firebase.login(email, password)
        .then(usuario => {
          // console.log(usuario.user)
          if(usuario.user.emailVerified){
            router.replace("/dashboard");
          } else {
            // firebase.cerrarSesion()
            router.replace("/verificacion");
          }
        })
    } catch (error) {
      console.error("Hubo un error al iniciar sesion", error.message);
      guardarError(error.message);
    }
  }

  return (
    <>
    <div className="">
      <div className="mx-auto px-4">

        <Header />

        <div className="sm:w-lg mx-auto">
          <h1 className="text-xl font-sans font-bold text-gray-600 text-center pt-8">
            Inicia Sesión
          </h1>
          {/* { mensaje && <Alerta /> } */}
          <div className="flex justify-center mt-5">
            <div className="w-full max-w-lg relative">
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
                <button
                  className="flex space-x-1 items-center justify-center text-lg bg-principal hover:bg-principal-hover w-full p-4 text-white cursor-pointer mb-5 focus:outline-none"
                  type="submit"
                >
                  <IconUser width={30} heigth={30} stroke={"#fff"}/>
                  <span>Iniciar sesión</span>
                </button>
                <Link href="/resetpassword">
                  <a className="block text-gray-400 text-right mt-2">¿Olvidaste la contraseña?</a>
                </Link>
                <Link href="/crearcuenta">
                  <a className="block mt-16 text-gray-600 text-center">¿No tienes cuenta?</a>
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
