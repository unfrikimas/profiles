import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import formContext from '../context/form/formContext';

const TarjetaCreada = () => {

    const FormContext = useContext(formContext);
    const { urlTarjeta } = FormContext;

    const router = useRouter()
    
    useEffect(() => {
        if(!urlTarjeta) {
            return router.push('/')
        }
    }, [urlTarjeta])

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
        { urlTarjeta && (
            <div className="flex flex-col h-screen items-center justify-center">
                <div>
                    <h1 className="-mt-16 text-2xl text-purple-600 text-center font-bold pb-4">¡Felicidades!<br></br>Ya tienes tu tarjeta web</h1>
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
                        className="block w-full pt-2 pb-2.5 border-2 rounded-xl my-2 border-purple-600 text-purple-600 focus:outline-none"
                        type="button"
                        id="copiarEnlace"
                        onClick={ () => copiarEnlace() }
                    >
                        Copiar Enlace
                    </button>
                    <Link href={`/t/${urlTarjeta}`}>
                        <a className="block w-full pt-3 pb-3.5 rounded-xl my-2 bg-purple-600 text-white font-bold">
                            Ver Tarjeta
                        </a>
                    </Link>
                </div>
            </div>
        )}
        </>
    );
}
 
export default TarjetaCreada;