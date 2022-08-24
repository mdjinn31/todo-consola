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
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar Tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opcion  '.yellow.bold);
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
    //return await inquirer.prompt(preguntas);
}

const pause = async() => {
    console.log('\n');
    await inquirer.prompt( {
        type: 'input',
        name: 'enter',
        message: `Precione ${'ENTER'.green.bold} para continuar`,
      });
}

module.exports ={
    inquirerMenu,
    pause
}