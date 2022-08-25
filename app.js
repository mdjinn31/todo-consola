require('colors');
const { saveData, readData } = require('./helpers/files');
const { inquirerMenu,
        pause,
        readInput
        } = require('./helpers/inquirer');
const { listTasks, pendingListTasks,compleatedListTasks } = require('./helpers/mensajes');
const Tareas = require('./models/tareas');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const savedData = readData();

    if(savedData){
        tareas.cargarTareasFromArray(savedData);
    }

    //await pause();
    
    do{
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
               const desc = await readInput('Drescripcion: ');
               tareas.crearTarea(desc);
                break;
            case '2':
                //console.log(tareas.listadoArr);
                listTasks(tareas.listadoArr);
                break;
            case '3':
                compleatedListTasks(tareas.listadoArr);
                break;
            case '4':
                pendingListTasks(tareas.listadoArr);
                break;                                        
            case '5':
                
                break;
            case '6':
                
                break;                
        }

        saveData(tareas.listadoArr);

        await pause();
    }while(opt !== '0')
}

main();