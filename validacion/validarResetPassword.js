export default function validarResetPassword(valores) {
    let errores = {};

    //validar el email
    if(!valores.email) {
        errores.email = 'El email es obligatorio';
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ) {
        errores.email = 'Email no valido';
    }

    return errores;
}