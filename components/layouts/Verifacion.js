import React, { useEffect, useState } from 'react';


const VerificacionCuenta = (firebase, usuario) => {

    const [ usuarioVerificado, setUsuarioVerificado ] = useState(false);
    const [ alertarReenvioVerificacion, setAlertarReenvioVerificacion ] = useState(false)

    //reenvia la veificacion de la cuenta por correo
    const reenviarVerificacion = () => {
        try {
            firebase.verificar()
            setAlertarReenvioVerificacion(true)
            setTimeout(() => {
                setAlertarReenvioVerificacion(false)
            }, 5000);
        } catch (error) {
            console.log(error)
        }
    }

    return (  

        <section className="flex-1">
            <div className="px-8">
                <div className="mt-32 p-4 bg-red-200 text-lg text-gray-600 text-center">
                    { alertarReenvioVerificacion ?
                    <p className="text-principal font-bold">El correo de verificación fue reenviado.</p>
                    :
                    <p>Te hemos enviado un correo para verificar tu cuenta. Primero debes verificar tu cuenta para poder crear una tarjeta web.</p>
                    }
                </div>
                { !alertarReenvioVerificacion && (
                <div className="flex justify-center mt-8 text-gray-600">
                    <p>No he recibido el correo.</p>
                    <button
                    className="hover:underline pl-1 focus:outline-none"
                    type="button"
                    onClick={() => reenviarVerificacion()}
                    >Reenviar</button>
                </div>
                )}
            </div>
        </section>        

    );
}
 
export default VerificacionCuenta;