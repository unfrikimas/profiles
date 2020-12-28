import firebase from '../../../firebase/firebase';

const UnaTarjeta = async (request, response) => {

    const { query } = request
    const { url } = query

    const tarjetaRef = firebase.db.collection('tarjetas');
    const tarjeta = await tarjetaRef.where('url', '==', url).get()
        .then(snapshot => {
            if (snapshot.empty) {
            console.log('No existe esta tarjeta');
            response.json({
                msg: "No existe la tarjeta"
            })
            // response.status(404).end()
            return;
            }
            snapshot.forEach(doc => {
                // console.log(doc.id, '=>', doc.data());
                const data = doc.data()
                const id = doc.id
                response.json({
                    ...data,
                    id
                })
            });
        })
        .catch(err => {
            console.log('Hubo un error obteniendo la tarjeta', err);
        });

}

export default UnaTarjeta;