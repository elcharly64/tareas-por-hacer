// const argumentos = require("yargs").argv;
// const orden = argumentos._[0];
// console.log(orden);

let tarea = require('./por-hacer/por-hacer');
const parametros = require('./config/yargs').parametros;
const colores = require('colors');
const orden = parametros._[0];
switch (orden) {
    case "crear":
        {
            nuevoElemento = tarea.porHacer(parametros.descripcion);
            console.log("Agregado", nuevoElemento);
            break;
        }
    case "listar":
        {
            let todasLasTareas = tarea.lasTareas();
            todasLasTareas.forEach(unaTarea => {
                console.log("===========Por hacer============".green);
                console.log(unaTarea.descripcion);
                console.log("Terminada:" + unaTarea.completado);
                console.log("============================".green);
            })
            break;
        }
    case "actualizar":
        {
            console.log(tarea.actualizar(parametros.descripcion, parametros.completado));
            break;
        }
    case "borrar":
        {
            console.log(tarea.borrar(parametros.descripcion));
            break;
        }
    default:
        {
            console.log("comando no reconocido");
            break;
        }

}