const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado de una tarea por hacer', {
        descripcion,
        completado
    })
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'borra un elemento', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}