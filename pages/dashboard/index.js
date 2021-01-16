import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';
import formContext from '../../context/form/formContext';
import HeaderUser from '../../components/layouts/HeaderUser';
import obtenerTarjeta from '../../utils/obtenerTarjeta';
import Layout from '../../components/layouts/Layout';
import IconLink from '../../components/icons/form/link';
import IconCard from '../../components/icons/form/card';
import IconEditar from '../../components/icons/form/edit';

export const ID_CARD_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

const DashBoard = () => {

  const [ usuarioVerificado, setUsuarioVerificado ] = useState(false);

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  //context para los datos de la tarjeta
  const FormContext = useContext(formContext);
  const { id, urlTarjeta } = FormContext;

  useEffect(() => {
    if(usuario && usuario.emailVerified) {
      setUsuarioVerificado(true)
    }
  }, [usuario])

  //funcion que copia el enlace
  const copiarEnlace = () => {
    navigator.clipboard.writeText(`https://brevi.site/t/${urlTarjeta}`);
    document.getElementById('copiarEnlace').innerHTML="¡Copiado!";
    setTimeout(() => {
        document.getElementById('copiarEnlace').innerHTML="Copiar enlace";
    }, 700);
  };


  return (
    <>

      <Layout>

      <div className="flex flex-col max-w-lg mx-auto">

        { usuarioVerificado && id === '0' ?

          <section className="flex-1">
            <div className="px-8">
              <div className="mt-48 py-2 bg-red-200 text-lg text-gray-600 text-center">
                <p>No has creado tu tarjeta web</p>
              </div>
              <div className="mt-6 flex justify-center items-center">
                <Link href="/p/card1">
                  <a
                    className="flex justify-center w-56 text-center px-6 pt-3 pb-3.5 text-lg text-principal border border-principal">
                    <IconEditar width={30} heigth={30} stroke={"#fe2c55"}/>
                    <span className="pl-1">Crear tarjeta</span>
                  </a>
                </Link>
              </div>
            </div>
          </section>

        : usuarioVerificado && id && id !== '0' ?

          <section className="flex-1">
            <div className="px-8">
              <div className="mt-24 py-2 px-2 mx-4 bg-green-200 text-lg text-gray-600 text-center">
                <p>¡Ya tienes una tarjeta web!<br></br>Copia el enlace y pégalo en tus redes sociales.</p>
              </div>
              <div className="mt-6 flex flex-col justify-center items-center">
                <button 
                  className="flex justify-center w-56 text-center mb-4 px-6 pt-3 pb-3.5 text-lg focus:outline-none text-principal border border-principal"
                  type="button"
                  id="copiarEnlace"
                  onClick={ () => copiarEnlace() }
                >
                  <IconLink width={30} heigth={30} stroke={"#fe2c55"}/>
                  Copiar enlace
                </button>      
                <Link href={`/t/${urlTarjeta}`}>
                  <a 
                    className="flex justify-center w-56 text-center mb-4 px-6 pt-3 pb-3.5 text-lg focus:outline-none text-principal border border-principal">
                    <IconCard width={30} heigth={30} stroke={"#fe2c55"}/>
                    <span className="pl-1">Ver tarjeta</span>
                  </a>
                </Link>        
                <Link href="/p/card1">
                  <a
                    className="flex justify-center w-56 px-6 pt-3 pb-3.5 text-center text-lg bg-principal hover:bg-principal-hover text-white" 
                    href="#">
                    <IconEditar width={30} heigth={30} stroke={"#fff"}/>
                    <span className="pl-1">Editar tarjeta</span>
                  </a>
                </Link>
              </div>
            </div>
          </section>

          : 

            <section className="flex-1">
                <p className="text-center pt-48">Cargando...</p>
            </section>

        }
{/* 
        <footer className="h-12 border-1 border-t border-gray-300">
          <div>

          </div>
        </footer> */}

      </div>
      </Layout>

    </>
  )
}

export default DashBoard;
