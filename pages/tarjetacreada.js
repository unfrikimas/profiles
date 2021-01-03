import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import formContext from '../context/form/formContext';

const TarjetaCreada = () => {

    const FormContext = useContext(formContext);
    const { urlTarjeta } = FormContext;

      //funcion que copia el enlace
    const copiarEnlace = () => {
        navigator.clipboard.writeText(`https://brevi.site/t/${urlTarjeta}`);
        document.getElementById('copiarEnlace').innerHTML="¡Copiado!";
        setTimeout(() => {
            document.getElementById('copiarEnlace').innerHTML="Copiar Enlace";
        }, 1000);
    };

    return (  

        <div className="flex flex-col h-screen items-center justify-center">
            <div>
                <h1 className="-mt-12 text-2xl text-purple-600 text-center font-bold pb-4">¡Felicidades!<br></br>Ya tienes tu tarjeta web</h1>
            </div>
            <picture>
                <Image
                    src="/img/brevi-success-2.gif"
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

    );
}
 
export default TarjetaCreada;