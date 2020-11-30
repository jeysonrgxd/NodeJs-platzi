const fs = require('fs')

// sacame la funcion crear server
const { createServer } = require("http")
const server = createServer() //ejecutamos la funcion para crear nuestro servidor

server.on("request", (req, res) => {
   // si el archivo big.txt es muy grande consumira mucha nuestra memoria al hacer peticiones para eso es mejor manejarlo con los streams donde es mejor por el echo que maneja torsos de datos
   // fs.readFile("./big.txt", (err, data) => {
   //    if (err) {
   //       console.log("Errro: ", err)
   //    }
   //    res.end(data)

   // })

   const src = fs.createReadStream('./big.txt')
   src.pipe(res)

})

server.listen(9000) //esto tiene adentro un emit que ejecuta el on