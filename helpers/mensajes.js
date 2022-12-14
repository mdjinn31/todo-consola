
require('colors');

const showMenu = () => {
    return new Promise(
        resolve => {
            console.clear();
            console.log('=========================='.green);
            console.log('  Seleccione una opcion  '.yellow.bold);
            console.log('==========================\n'.green);
            console.log(`${'1.'.green} Crear Tarea `);
            console.log(`${'2.'.green} Listar Tareas `);
            console.log(`${'3.'.green} Listar Tareas Completadas `);
            console.log(`${'4.'.green} Listar Tareas Pendientes `);
            console.log(`${'5.'.green} Completar Tarea(s) `);
            console.log(`${'6.'.green} Borrar Tarea `);
            console.log(`${'0.'.green} Salir `);
            console.log('\n');
            console.log('==========================\n'.green);
            console.log('\n');
            
            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            readLine.question('Selecione una opción: ', (opt) => {
                readLine.close();
                resolve(opt);
            })
        }
    )
}

const pause = () => {
    return new Promise(
        resolve => {
            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });    
            readLine.question(`\nPrecione ${'ENTER'.green.bold} para continuar \n`, (opt) => {
                readLine.close();
                resolve();
            });
        }
    )
}

module.exports = {
    showMenu,
    pause
}