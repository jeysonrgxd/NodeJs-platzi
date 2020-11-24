const { createServer } = require('http')
const server = createServer()

// el servidor tambien funciona con eventos
server.on('request', (req, res) => {
   res.status = '200'
   res.setHeader('Content-type', 'text/html; charset=UTF-8')
   res.end('<h1>Hola como estas</h1>')
})

//levantamos nuestro servidor
server.listen(9000)
console.log('Servidor en la url http://localhost:9000')

// ...seguir con el video despues  https://github.com/JasanHdz/backendnodejs/tree/master/notes#arquitectura-orientada-a-eventos