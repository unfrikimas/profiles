import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import useTimeAgo from "../hooks/useTimeAgo"
// import useDateTimeFormat from "../hooks/useDateTimeFormat"
import { FirebaseContext } from "../firebase";
import formatearFecha from "../utils/formatearFecha";
import Layout from "../components/layouts/Layout";
import IconUserItem from "../components/icons/form/useritem";
import IconCheckTrue from "../components/icons/form/checktrue";
import IconFechaCreada from "../components/icons/form/fechacreada";
import IconFechaEntrada from "../components/icons/form/fechaentrada";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarActualizarNombre from "../validacion/validarActualizarNombre";

const STATE_INICIAL_NOMBRE = {
  nombre: ""
}

const Cuenta = () => {

  const [usuarioVerificado, setUsuarioVerificado] = useState(false);
  const [error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange } = useValidacion(
    STATE_INICIAL_NOMBRE,
    validarActualizarNombre,
    actualizarNombreUsuario
  );

  //extraer datos del objeto valores
  const { nombre } = valores;

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  //timestamp
  const fechaCreacionCuenta = usuario?.metadata.creationTime;
  const fechaUltimoIngreso = usuario?.metadata.lastSignInTime;
  const cuentaCreada = formatearFecha(fechaCreacionCuenta);
  const ultimoIngreso = formatearFecha(fechaUltimoIngreso);

  useEffect(() => {
    if (usuario && usuario.emailVerified) {
      setUsuarioVerificado(true);
    }
  }, [usuario]);

  async function actualizarNombreUsuario() {
    const user = await firebase.auth.currentUser;
    await user
        .updateProfile({
            displayName: nombre,
        })
        .then(function () {
            // Update successful.
        })
        .catch(error => {
            // An error happened.
            console.error(
                "Hubo un error al actualizar el nombre de usuario",
                error.message
            );
            guardarError(error.message);
        });
  }

  return (
    <>
      <Layout>
        <div className="mx-auto">
          {usuarioVerificado ? (
            <div className="w-full px-4">
              <h1 className="text-xl font-sans font-bold text-gray-600 text-center pt-8">
                Tu cuenta
              </h1>

              <div className="w-full flex justify-center mt-5">
                <div className="w-full sm:max-w-lg px-4">
                  <div className="flex items-center py-1 text-gray-400">
                    <IconUserItem width={20} height={20} />
                    <p className="pl-1">{usuario.email}</p>
                  </div>
                  <div className="flex items-center py-1 text-gray-400">
                    <IconCheckTrue width={20} height={20} stroke={"#01cc00"} />
                    <p className="pl-1">Email verificado</p>
                  </div>
                  <div className="flex items-center py-1 text-gray-400">
                    <IconFechaCreada width={20} height={20} />
                    <p className="pl-1">Cuenta creada: {cuentaCreada}</p>
                  </div>
                  <div className="flex items-center py-1 text-gray-400">
                    <IconFechaEntrada width={20} height={20} />
                    <p className="pl-1">Ultimo ingreso: {ultimoIngreso}</p>
                  </div>
                  <form 
                    className="mt-4" 
                    onSubmit={handleSubmit} 
                    noValidate>
                    <div className="mb-4">
                      <label className="text-sm text-gray-400">
                        Nombre:{" "}
                        {usuario.displayName.replace(/\b\w/g, (l) =>
                          l.toUpperCase()
                        )}
                      </label>
                      <input
                        className="text-lg appearance-none border w-full py-4 px-2 text-gray-500 leading-tight focus:outline-none focus:bg-gray-100 mt-2"
                        type="text"
                        id="nombre"
                        placeholder="Escribe el nuevo nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                      />
                    </div>
                    {errores.nombre && <Error>{errores.nombre}</Error>}
                    {error && <Error>{error}</Error>}
                    <input
                      className="text-xl bg-principal hover:bg-principal-hover w-full py-4 text-white mb-5 focus:outline-none cursor-pointer"
                      type="submit"
                      value="Actualizar nombre"
                    />
                  </form>
                  <Link href="/resetpassword">
                    <a className="block text-gray-400 text-right mt-2">
                      Cambiar contraseña
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <section className="flex-1">
              <p className="text-center pt-48">Cargando...</p>
            </section>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Cuenta;
