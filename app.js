require('colors');
const {showMenu, pause} = require('./helpers/mensajes');

const main = async() => {

    console.log('Hola mundo'.green.bold);
    let opt = ''
    do{
        opt = await showMenu();
        console.log({opt});
        await pause();
    }while(opt !== '0')


    /*
    showMenu();
    pause();
    */

}

main();