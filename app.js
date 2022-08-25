require('colors');
const { saveData, readData } = require('./helpers/files');
const { inquirerMenu,
        pause,
        readInput,
        deleteTaskMenu
        } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();
    const savedData = readData();

    if(savedData){
        tareas.cargarTareasFromArray(savedData);
    }

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
               const desc = await readInput('Drescripcion: ');
               tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listarTareas();
                break;
            case '3':
                tareas.listarTareasCompletadas();
                break;
            case '4':
                tareas.listarTareasPendientes();
                break;                                        
            case '5':
                
                break;
            case '6':
                const idToDelete = await deleteTaskMenu(tareas.listadoArr);
                console.log(idToDelete);
                break;                
        }

        saveData(tareas.listadoArr);

        await pause();
    }while(opt !== '0')
}

main();