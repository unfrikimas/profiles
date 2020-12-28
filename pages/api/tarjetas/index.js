import firebase from '../../../firebase/firebase';

const TodasTarjetas = async (request, response) => {

    const tarjetaRef = firebase.db.collection('tarjetas');
    const query = await tarjetaRef.get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No hay tarjetas');
                response.json({
                    msg: "No hay tarjetas"
                })
                // response.status(404).end()
                return;
            }

            const tarjetas = snapshot.docs.map(doc => {
                const data = doc.data()
                return {
                    id: doc.id,
                    ...data
                }
            });
            response.json({
                tarjetas
            })

        })
        .catch(err => {
            console.log('Hubo un error obteniendo la tarjeta', err);
        });

}

export default TodasTarjetas;