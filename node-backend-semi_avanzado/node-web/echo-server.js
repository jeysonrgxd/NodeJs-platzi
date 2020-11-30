const { createServer } = require('http')
const server = createServer()

server.on('request', (req, res) => {

   if (req.method == 'POST' && req.url == "/echo") {

      let body = []
      let dias = [
         'lunes',
         'martes',
         'miercoles',
         'jueves',
         'viernes',
         'sabado',
         'domingo',
      ]

      req.on('data', chunks =>{
         // input: 10/12/1994
         body.push(chunks)
      })
      .on('end',()=>{

         let fechaNacimiento = new Date(Buffer.concat(body).toString())
         let dia = dias[fechaNacimiento.getDay()]

         res.writeHead(200, { 'Content-Type': 'text/plain' })
         res.end(`El dia en que naciste es: ${dia}`)

      })

      

   } else {

      res.writeHead(400, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ ok: false, mensaje: "No se econtre la pagina" }))
      
   }
})

//levantamos nuestro servidor
server.listen(9000)
console.log('Servidor en la url http://localhost:9000')