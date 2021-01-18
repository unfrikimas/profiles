import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { FirebaseContext } from '../../firebase';
import { useRouter } from 'next/router';
import formContext from '../../context/form/formContext';
import Layout from '../../components/layouts/Layout';
import IconLink from '../../components/icons/form/link';
import IconCard from '../../components/icons/form/card';
import IconEditar from '../../components/icons/form/edit';


const DashBoard = () => {

  const [ usuarioVerificado, setUsuarioVerificado ] = useState(false);

  //context de usuario
  const { usuario, firebase } = useContext(FirebaseContext);

  //context para los datos de la tarjeta
  const FormContext = useContext(formContext);
  const { id, urlTarjeta } = FormContext;

  const router = useRouter();

  useEffect(() => {
    if(usuario && usuario.emailVerified) {
      setUsuarioVerificado(true)
    } else if(!usuario?.emailVerified) {
      router.replace('/verificacion');
    }
  }, [usuario])

  //funcion que copia el enlace
  const copiarEnlace = () => {
    navigator.clipboard.writeText(`https://brevi.site/t/${urlTarjeta}`);
    const textoBotonEnlace = document.getElementById('copiarEnlace')
    textoBotonEnlace.innerHTML = '<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" width="30" heigth="30" stroke="#fe2c55"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 7.5l1-1a2.828 2.828 0 114 4l-1 1m-2 2l-2 2a2.828 2.828 0 11-4-4l2-2M7.5 13.5l5-5"></path></g></svg>Enlace copiado'
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

      </div>
      </Layout>

    </>
  )
}

export default DashBoard;
