const fs = require('fs')

const server = require("http").createServer()

server.on("request", (req, res) => {
   // si el archivo big.txt es muy grande consumira mucha nuestra memoria al hacer peticiones para eso es mejor manejarlo con los streams donde es mejor por el echo que maneja torsos de datos
   fs.readFile("./big.txt", (err, data) => {
      if(err){
         console.log("Errro: ",err)
      }
      res.end(data)

   })
})

server.listen(9000)