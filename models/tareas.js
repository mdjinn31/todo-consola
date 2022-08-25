const Tarea = require('./tarea');
const {listadoTareas} = require('../helpers/inquirer');

class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => listado.push(this._listado[key]));
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ){
        tareas.map( tarea =>  this._listado[tarea.id] = tarea);
    }

    listarTareas(){

        listadoTareas(this.listadoArr)
        //console.log(this.listadoArr);
        
    }

    crearTarea( desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;