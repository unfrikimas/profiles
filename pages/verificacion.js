import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/layouts/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';

//importando firebase
import { FirebaseContext } from '../firebase';

const VerificacionCuenta = () => {

    //context de usuario
    const { firebase } = useContext(FirebaseContext);

    const [ alertarReenvioVerificacion, setAlertarReenvioVerificacion ] = useState(false)

    const router = useRouter();

    // useEffect(() => {
    //     const user = firebase.auth.currentUser
    //     if(!user) {
    //         return router.replace("/crearcuenta")
    //     }
    // }, [])

    //reenvia la veificacion de la cuenta por correo
    const reenviarVerificacion = () => {
        try {
            const user = firebase.auth.currentUser 
            firebase.verificar(user)
            setAlertarReenvioVerificacion(true)
            setTimeout(() => {
                setAlertarReenvioVerificacion(false)
            }, 5000);
        } catch (error) {
            console.log(error)
        }
    }

    return (  

        <div className="min-h-screen">
            <div className="container mx-auto px-4">
  
                <Header />

                <section className="flex-1">
                    <div className="px-4">
                        <div className="mt-16 p-4 bg-red-200 text-lg text-gray-600 text-center">
                            { alertarReenvioVerificacion ?
                            <p className="text-principal font-bold">El correo de verificación fue reenviado.</p>
                            :
                            <p>Te hemos enviado un correo para verificar tu cuenta. Revisa en tu bandeja de entrada o en la carpeta de Spam.</p>
                            }
                        </div>
                        { !alertarReenvioVerificacion && (
                        <>
                        <div className="flex justify-center mt-4 text-gray-600">
                            <p>No he recibido el correo.</p>
                            <button
                            className="hover:underline pl-1 focus:outline-none"
                            type="button"
                            onClick={() => reenviarVerificacion()}
                            >Reenviar</button>
                        </div>
                        <div className="w-full flex items-center justify-center mt-8">
                            <Link href="/iniciarsesion">
                            <a 
                                className="w-full text-center mb-4 pt-3 pb-3.5 text-lg focus:outline-none text-principal border border-principal">
                                Ya verifiqué mi cuenta
                            </a>
                            </Link>                        
                        </div>
                        </>
                        )}
                    </div>
                </section>   
            </div>
        </div>     

    );
}
 
export default VerificacionCuenta;