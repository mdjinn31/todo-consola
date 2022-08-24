require('colors');
const { inquirerMenu,
        pause,
        readInput
        } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
               const desc = await readInput('Drescripcion: ');
               tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
            case '3':
                
                break;
            case '4':
                
                break;                                        
            case '5':
                
                break;
            case '6':
                
                break;                
        }

        await pause();
    }while(opt !== '0')
}

main();