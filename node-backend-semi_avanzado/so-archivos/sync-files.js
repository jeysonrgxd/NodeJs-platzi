const fs = require("fs")

// usamo try catch devido que estamos utilizando el modulo fs de manera syncrona y por ende el programa se detiene asta que se aya completada el metodo y es por esto que no tiene como manejar el error por eso utilizamos el try catch

try {
   // obtenemos el nombre que le pasomos en la linea de comandos primero es node despues lo que ejecutara y despues el nombre que le pasaremos al readFileSync por eso accesedemos ala posicion 2
   const file = process.argv[2]

   const content = fs.readFileSync(file).toString() //usamos el toString ya que nos viene como buffer y con esto lo podemo convertir

   const lines = content.split("\n") //separamos los parrafos por salto de line

   console.log(lines); //imprimimos el array de los parrafos

} catch (error) {
   
   console.log(error); //si hay un error lo imprimimos
}