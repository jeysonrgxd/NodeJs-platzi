// no es nesesario requerir el modulo ya que viene en los globales
// const p = require('process');

// defenimos los eventos por asi decir los procesos del sistema o estados  
process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ale, el proceso acabó');

    // esto no se ejecutara debido que es una funcion asyncrona y ps cuando llegemos este evento exit del proceso ps se termina el event loop y por ende ya no escucha mas peticiones
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
});

// aca si se ejecuta normal
setTimeout(() => {
    console.log('Esto se va a ver');
}, 0);

// capturamos exepciones especificandole el evento y un callback que recive dos parametros los cuales son el err y origen
process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    console.log(err)
    console.log(origen)
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
    return true
});

// forzamos una ejecutar una funcion que no existe para capturar con el evento que especificamos uncaughtException
funcionQueNoExiste();

// prueba para ver si sale o no este mensaje
console.log('Esto si el error no se recoje, no sale');
