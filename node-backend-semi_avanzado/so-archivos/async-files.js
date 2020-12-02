const fs = require("fs")

// obtenemos el nombre que le pasomos en la linea de comandos primero es node despues lo que ejecutara y despues el nombre que le pasaremos al readFileSync por eso accesedemos ala posicion 2
const file = process.argv[2]

if(!file){
   throw new Error("Debes indicar el archivo que deves leer")
}

// ya no usamos el try catch devido que estamos utilziando readFile el cual es de manera asyncrona y el error es manejado mediante un callback que me devuelve el error y el content y es ai cuando termina el proceso yo hago algo pero esto no detiene la ejecucion por ser asyncrona
fs.readFile(file,(err,content)=>{
   if(err){
      console.log(err);
   }

   const lines = content.toString().split("\n").length //separamos los parrafos por salto de line
   console.log(lines); //imprimimos el array de los parrafos
})

