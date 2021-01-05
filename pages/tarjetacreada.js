import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import formContext from '../context/form/formContext';
import HeaderUser from '../components/layouts/HeaderUser';

const TarjetaCreada = () => {

    //context de los datos de tarjeta
    const FormContext = useContext(formContext);
    const { urlTarjeta } = FormContext;

    const router = useRouter()
    
    // useEffect(() => {
    //     if(!urlTarjeta) {
    //         return router.push('/')
    //     }
    // }, [urlTarjeta])

    //funcion que copia el enlace
    const copiarEnlace = () => {
        navigator.clipboard.writeText(`https://brevi.site/t/${urlTarjeta}`);
        document.getElementById('copiarEnlace').innerHTML="¡Copiado!";
        setTimeout(() => {
            document.getElementById('copiarEnlace').innerHTML="Copiar Enlace";
        }, 700);
    };

    return (  
        <>
        {/* { urlTarjeta && ( */}
            <HeaderUser />
            <div className="flex flex-col h-screen items-center justify-center">
                <div>
                    <h1 className="-mt-16 py-2 px-12 mb-4 bg-green-200 text-lg text-gray-600 text-center">¡Felicidades!<br></br>Ya tienes tu tarjeta web</h1>
                </div>
                <picture>
                    <img
                        src="https://res.cloudinary.com/petportrait/image/upload/v1609704811/brevi_site/brevi-success-2_ltyope.gif"
                        alt="Tarjeta creada con éxito"
                        width={300}
                        height={250}
                    />
                </picture>
                <div className="w-1/2 max-w-lg text-center mt-4">
                    <button 
                        className="block w-full pt-2.5 pb-3 border my-4 border-principal text-principal focus:outline-none"
                        type="button"
                        id="copiarEnlace"
                        onClick={ () => copiarEnlace() }
                    >
                        Copiar enlace
                    </button>
                    <Link href={`/t/${urlTarjeta}`}>
                        <a className="block w-full pt-3 pb-3.5 my-4 bg-principal hover:bg-principal-hover text-white font-bold">
                            Ver tarjeta web
                        </a>
                    </Link>
                </div>
            </div>
        {/* )} */}
        </>
    );
}
 
export default TarjetaCreada;