//aquí configuraré el manejo de parámetros

const descripcion = {
    alias: 'd',
    demand: true
}

const completado = {
    alias: 'c',
    default: true
}

const parametros = require('yargs')
    .command('crear', 'Crear nueva cosa para hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    parametros
}