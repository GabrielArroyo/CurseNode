const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


//argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(err => {
//         console.log('Error:', err);
//     })

// clima.getClima('40.750000', '-74.000000')
//     .then(console.log)
//     .catch(console.log)


//Mi ejercicio

// const getInfo = (direccion) => {
//     const temp = lugar.getLugarLatLng(direccion)
//         .then(resp => {
//             clima.getClima(resp.lat, resp.lng)
//                 .then(temp => {
//                     console.log(`El clima de ${direccion} es de ${temp}`)
//                 })
//                 .catch(console.log)
//         })
//         .catch(console.log)
// }

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);

        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccionResp} es de ${temp}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)


// lugar.getLugarLatLng(argv.direccion)
// .then(resp => {

//     clima.getClima(resp.lat, resp.lng)
//         .then(console.log)
//         .catch(console.log)
// })

// .catch(err => {
// console.log('Error:', err);
// })