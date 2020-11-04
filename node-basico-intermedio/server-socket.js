const express = require("express")
const app = express()

// creamon un servidor tradicional para trabajar con socket.io y le pasamos express para gestionar todas las rutas y los demas
const { Server } = require('http')
const server = Server(app)

// importamos la clase io de socket.io para poder crear nuestro servidor de socket de nuestro server pasandolo como parametro
const io = require('socket.io')
const socketServer = io(server) //inicalisamos

// nos conectamos de un cliente, de aqui lazamos peticiones http anuestro servidor bamos apoder traernos loq ue venga en la carpeta public con este servicio estatico de express y cada evz que inicializemos una conexion por websocket va mandarnos un mensaje que es bienvenido
app.use(express.static('public'))

// preparamos la conexion cuando alguien se conecte
socketServer.on("connection", function (socket) {
   console.log('Nuevo cliente conectado');

   // enviamos un mensaje atravez de nuestro socket, podemos decir que tipo sera en este caso sera tipo mensaje
   socket.emit('mensaje','Bienvenido!')
})

setInterval(()=>{
   // nuestro servidor socket creado va emitir cada 3 segundo un mensaje para todos los conectados
   socketServer.emit("mensaje",'Hola, los escribo a todos')
},3000)

server.listen(3000, function () {
   console.log("Servidor iniciado en http://localhost:3000");
})
