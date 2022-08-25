require('colors');
const { saveData, readData } = require('./helpers/files');
const { inquirerMenu,
        pause,
        readInput,
        deleteTaskMenu,
        confirm,
        completeTaskMenu
        } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();
    const savedData = readData();

    if(savedData) tareas.cargarTareasFromArray(savedData);

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
               const desc = await readInput('Drescripcion: ');
               tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listarTareas(0);
                break;
            case '3':
                tareas.listarTareas(2);
                break;
            case '4':
                tareas.listarTareas(1);
                break;                                        
            case '5':
                const check = await completeTaskMenu(tareas.listadoArr);
                if (check.length > 0) tareas.markarTareasCompletadas(check);
                break;
            case '6':
                const idToDelete = await deleteTaskMenu(tareas.listadoArr);
                if (idToDelete === '0') break;
                const ok = await confirm('Desea borrar la tarea?');
                if(ok) {
                    tareas.deleteTask(idToDelete);
                    console.log('Tarrea borrada exitosamente'.green.bold);
                }
                break;                
        }

        saveData(tareas.listadoArr);

        await pause();
    }while(opt !== '0')
}

main();