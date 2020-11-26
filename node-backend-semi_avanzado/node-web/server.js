const { createServer } = require('http')
const server = createServer()

// el servidor tambien funciona con eventos
server.on('request', (req, res) => {
   // res.status = '200'
   // res.setHeader('Content-type', 'text/html; charset=UTF-8')
   res.writeHead(200, { 'Content-type':'text/html; charset=UTF-8'})
   res.end(JSON.stringify({ ok: true, mensaje: "hola" }))
})

//levantamos nuestro servidor
server.listen(9000)
console.log('Servidor en la url http://localhost:9000')

// ...seguir con el video despues  https://github.com/JasanHdz/backendnodejs/tree/master/notes#arquitectura-orientada-a-eventos

