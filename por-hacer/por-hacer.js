const fileSystem = require('fs');
const { listenerCount } = require('process');


let ListaPorHacer = [];

let leerDB = () => {
    try {

        ListaPorHacer = require('../db/data.json');
    } catch {
        ListaPorHacer = [];
    }
}

let guardarDB = () => {
    let dato = JSON.stringify(ListaPorHacer);
    fileSystem.writeFile('db/data.json', dato, () => console.log("guardado"));
}

let porHacer = (descripcion) => {
    leerDB();
    let esteHacer = {
        descripcion,
        completado: false
    }
    ListaPorHacer.push(esteHacer);
    guardarDB();
    return esteHacer;
}

let lasTareas = () => {
    leerDB();
    return ListaPorHacer;
}

let actualizar = (descripcion, estado) => {
        leerDB();
        let indice = ListaPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
        console.log(`indice=${indice}`);
        if (indice >= 0) {
            ListaPorHacer[indice].completado = estado;
            guardarDB();
            return true;
        } else return false;

    }
    //este hace el borrado a mi manera antigua
    // let borrar = (descripcion) => {
    //     leerDB();
    //     let nuevoListado = [];
    //     let indice = ListaPorHacer.findIndex(tarea => {
    //         return tarea.descripcion === descripcion;
    //     })
    //     console.log(`indice=${indice}`);
    //     if (indice < 0) return false;
    //     else {
    //         ListaPorHacer.forEach((tarea, index) => {
    //             if (index !== indice) {
    //                 nuevoListado.push(tarea);
    //             }
    //         })
    //         ListaPorHacer = nuevoListado;
    //         guardarDB();
    //         return true;
    //     }

// }

//este hace el borrado con filter
let borrar = (descripcion) => {
    leerDB();
    let nuevaBD = ListaPorHacer.filter(elemento => elemento.descripcion !== descripcion)

    if (ListaPorHacer.length !== nuevaBD.length) {
        ListaPorHacer = nuevaBD;
        guardarDB()
        return true;
    } else {
        return false;
    }

}


module.exports = {
    porHacer,
    guardarDB,
    lasTareas,
    actualizar,
    borrar
}