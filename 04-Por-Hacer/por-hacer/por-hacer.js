const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puede grabar', err);
    });

}

const cargarDB = () => {


    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}


const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const crear = (descripcion) => {


    cargarDB();

    let porHacer = {
        descripcion,
        comp: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();
    return porHacer
}


const actualizar = (descripcion, comp = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].comp = comp;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

//Mi ejercicio
// const borrar = (descripcion) => {
//     cargarDB();
//     let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

//     if (index >= 0) {
//         listadoPorHacer.splice(index, 1);
//         guardarDB();
//         return true;
//     } else {
//         return false;
//     }

// }

//ejemplo curso
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}