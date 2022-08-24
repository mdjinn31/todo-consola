require('colors');
const {inquirerMenu} = require('./helpers/inquirer');

const main = async() => {

    let opt = ''
    do{
        opt = await inquirerMenu();
        
        //await pause();
    }while(opt.opcion !== '0')


}

main();