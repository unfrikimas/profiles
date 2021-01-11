import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../firebase';
import HeaderUser from '../components/layouts/HeaderUser';

const TarjetaCreada = () => {

    //context de usuario
    const { usuario, firebase } = useContext(FirebaseContext);

    const router = useRouter();
    const { query: { url } } = router;
    
    useEffect(() => {
        if(!usuario || !url) {
            return router.replace('/')
        }
    }, [usuario, url])

    //funcion que copia el enlace
    const copiarEnlace = () => {
        navigator.clipboard.writeText(`https://brevi.site/t/${url}`);
        document.getElementById('copiarEnlace').innerHTML="¡Copiado!";
        setTimeout(() => {
            document.getElementById('copiarEnlace').innerHTML="Copiar Enlace";
        }, 700);
    };

    return (  
        <>
        {/* { urlTarjeta && ( */}
            <HeaderUser 
                usuario={usuario}
                firebase={firebase}
            />
            <div className="flex flex-col h-full items-center justify-center">
                <div>
                    <p className="mt-8 py-2 px-4 mb-4 mx-8 bg-green-200 text-lg text-gray-600 text-center"><span className="font-bold">¡Tu tarjeta web está lista!</span><br></br>Copia el enlace y pégalo en tus redes sociales.</p>
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
                    <Link href={`/t/${url}`}>
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