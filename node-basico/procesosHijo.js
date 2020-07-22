/*
Child Process
En node podemos crear procesos hijos que ejecuten cualquier accion de nuestro sistema operativo, como si nos encontraramos en la linea de comandos.

- Podemos llamar a exec para ejecuciones sencillas de consolas
- Podemos llamar a spawn para obtener el proceso: La ventaja de este enfoque es que obtienes  | mayor control del proceso, y del estado en el que se encuenta
*/

const { exec } = require('child_process')

// en window dir para listar, en linux ls -la
// stdout es la salida principal, sterr el estandar error por si habido un error

// exec('ls -la',(err,stdout, sterr)=>{
exec('dir',(err,stdout, sterr)=>{
// exec('node console.js', (err, stdout, sterr) => {
   if(err){
      console.log(err)
      return false
   }
   console.log(stdout);
  
})

// todo esto se para lo procesos hijo osea cuando atravez de node llamamos scripts bien sea para nuestra propia pc o ejecutar algun script de otro lenguaje
const { spawn } = require('child_process')
const myprocess = spawn('ls')

myprocess.stdout.on("data", data => console.log(data.toString()));
myprocess.on("exit", () => console.log("process end"));