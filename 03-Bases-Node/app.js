const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`${tabla}`))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(err => { console.log(err) })
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log('Limite', argv.limite);