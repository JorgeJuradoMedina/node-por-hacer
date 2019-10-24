/**
actualizacioon para la optimizacion de notas las cuales permiten 
simplificar condigo asiendo referencia a constantes que no cambia su
vaalor como son descripcion y completado sera siempre la estructura
similar por tal motivo se declara como constantes
*/
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la teara por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    descripcion: 'Marca como completado o pendiente la tarea0'
};




const argv = require('yargs')
    .command('crear', 'Crear un elemnto por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizaciond de las tareas a realizar', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion,
        completado
    })

.help()
    .argv;

module.exports = {
    argv

}