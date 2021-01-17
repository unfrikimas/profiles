import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../firebase';
import HeaderUser from '../components/layouts/HeaderUser';
import IconLink from '../components/icons/form/link';
import IconCard from '../components/icons/form/card';

const TarjetaCreada = () => {

    //context de usuario
    const { usuario, firebase } = useContext(FirebaseContext);

    const router = useRouter();
    const { query: { url } } = router;
    
    useEffect(() => {
        if(!usuario || !url) {
            return router.replace('/dashboard')
        }
    }, [usuario, url])

    //funcion que copia el enlace
    const copiarEnlace = () => {
        navigator.clipboard.writeText(`https://brevi.site/t/${url}`);
        const textoBotonEnlace = document.getElementById('copiarEnlace')
        textoBotonEnlace.innerHTML = '<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" width="30" heigth="30" stroke="#fe2c55"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 7.5l1-1a2.828 2.828 0 114 4l-1 1m-2 2l-2 2a2.828 2.828 0 11-4-4l2-2M7.5 13.5l5-5"></path></g></svg>Enlace copiado'
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
                <div className="max-w-lg text-center mt-4 mx-auto">
                    <button 
                        className="flex justify-center w-56 text-center px-6 pt-3 pb-3.5 text-lg text-principal border border-principal focus:outline-none mb-4"
                        type="button"
                        id="copiarEnlace"
                        onClick={ () => copiarEnlace() }
                    >
                        <IconLink width={30} heigth={30} stroke={"#fe2c55"}/>
                        <span>Copiar enlace</span>
                    </button>
                    <Link href={`/t/${url}`}>
                        <a className="flex space-x-1 justify-center w-56 px-6 pt-3 pb-3.5 text-center text-lg bg-principal hover:bg-principal-hover text-white focus:outline-none">
                            <IconCard width={30} heigth={30} stroke={"#fff"}/>
                            <span>Ver tarjeta web</span>
                        </a>
                    </Link>
                </div>
            </div>
        {/* )} */}
        </>
    );
}
 
export default TarjetaCreada;