export default function formatearFecha(fecha) {
    const fechaFormateada = new Date(fecha);
    const dia = fechaFormateada.getDate();
    const mes = fechaFormateada.getMonth() + 1;
    const anio = fechaFormateada.getFullYear();

    return `${dia}/${mes}/${anio}`
}