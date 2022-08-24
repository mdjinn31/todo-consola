require('colors');

const showMenu = () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opcion  '.yellow.bold);
    console.log('==========================\n'.green);
    
    console.log(`1. Crear Tarea `);
    console.log(`2. Listar Tareas `);
    console.log(`3. Listar Tareas Completadas `);
    console.log(`4. Listar Tareas Pendientes `);
    console.log(`5. Completar Tarea(s) `);
    console.log(`6. Borrar Tarea `);
    console.log(`0. Salir `);
    console.log('\n');
    console.log('==========================\n'.green);
}

module.exports = {
    showMenu
}