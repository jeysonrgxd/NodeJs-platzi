const fs = require("fs");

function leer (dir, call){
   // recordar que es una funcion asyncrona
   fs.readFile(dir,(err, data)=>{
      console.log(data.toString())
   })
   call("probando lectura")
}

// esta forma de console.log (pasamos la funcion de manera de frente)
leer(__dirname+"/texto1.txt", console.log)

// esta for tradicional de como le damos el contenido a la funcion
// leer(__dirname+"/texto1.txt", (msg)=>{
//    console.log(msg);
// })

function deletefile(dir, call){
   // borrar un archivo
   fs.unlink(dir, call)
}

deletefile(__dirname + "/texto_borrar.txt", console.log)