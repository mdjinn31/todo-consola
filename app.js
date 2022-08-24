require('colors');
const {showMenu} = require('./helpers/mensajes');

const main = async() => {

    console.log('Hola mundo'.green.bold);

    showMenu();
}

main();