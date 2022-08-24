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
                name: `${'1.'.yellow} ${'Crear Tarea'.inverse}`
            },
            {
                value: '2',
                name: `${'2.'.yellow} ${'Listar Tareas'.inverse}`
            },
            {
                value: '3',
                name: `${'3.'.yellow} ${'Listar Tareas Completadas'.inverse}`
            },
            {
                value: '4',
                name: `${'4.'.yellow} ${'Listar Tareas Pendientes'.inverse}`
            },
            {
                value: '5',
                name: `${'5.'.yellow} ${'Completar Tarea(s)'.inverse}`
            },
            {
                value: '6',
                name: `${'6.'.yellow} ${'Borrar Tarea'.inverse}`
            },
            {
                value: '0',
                name: `${'0.'.yellow} ${'Salir'.inverse}`
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

const readInput = async(message = '') => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;

}

module.exports ={
    inquirerMenu,
    pause,
    readInput
}