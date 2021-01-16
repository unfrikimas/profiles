export default function validarActualizarNombre(valores) {
    let errores = {};

    //validar el nombre de usuario
    if(!valores.nombre) {
        errores.nombre = 'El nombre es obligatorio';
    } 

    console.log(errores)
    return errores;
}