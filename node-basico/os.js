const os = require('os');

// console.log(os.arch());
// console.log(os.platform());

// console.log(os.cpus().length);

// console.log(os.constants);

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

// cuanta memoria ram me queda
// console.log(os.freemem());
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));

// cuanto memoria ram en total tengo
// console.log(gb(os.totalmem()));

// directorio raiz
// console.log(os.homedir())

// directorio temporal de archivos se borrar por si solos y sino oye que no pasa nada
// console.log(os.tmpdir())

// el nombre del host 
// console.log(os.hostname());

// nos trae todas las intenfaces de red que tenemos activa en la maquina
console.log(os.networkInterfaces());
