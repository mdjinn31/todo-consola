require('colors');

const inquirer = require("inquirer");

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que dessea hacer?',
        choices: [
            {
                value: '1',
                name: 'Crear Tarea'
            },
            {
                value: '2',
                name: 'Listar Tareas'
            },
            {
                value: '3',
                name: 'Listar Tareas Completadas'
            },
            {
                value: '4',
                name: 'Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: 'Completar Tarea(s)'
            },
            {
                value: '6',
                name: 'Borrar Tarea'
            },
            {
                value: '0',
                name: 'Salir'
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opcion  '.yellow.bold);
    console.log('==========================\n'.green);

    return await inquirer.prompt(preguntas);
}

module.exports ={
    inquirerMenu
}