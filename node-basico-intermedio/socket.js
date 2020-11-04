// Inicializaremos nuestro servidor de socke io de generar una instacia y poderla compartir
const socketIO = require("socket.io")

// creamo esta varibale que recivira la inicializacion de nuestro socket, recivira una referencia esto es para que cada vez que alguna cosa  dentro del objeto cambie nuestro variable socket donde lo mandemos estara actualizada
let socket = {}

// cantidad de conexiones
// let conections = 0

// creamos nuestro propia funcion de conexion
function connect(server){
   // de esta manera es como si estuvieramos inicializando io dentro d ela variable socket
   socket.io = socketIO(server);

   // verificar despues este codigo  SokcetIO
   // io.on('connection', (socket) => {
   //    console.log(`Connect...`)
   //    console.log(`Cantidad de conexiones: ${++conections}`)

   //    /** Aqui detectamos cada q un cliente se desconecte **/
   //    socket.on('disconnect', (message) => {
   //       console.log(`[DISCONNECT]: ${message}`)
   //       conections--
   //       showClients()
   //    })

   //    showClients()
   // })
}

/** verificar despues  Esta funcon muestra los ID de los clientes conectados **/
// function showClients() {
//    io.clients((error, clients) => {
//       if (error) throw error
//       console.log(`[CLIENTS]: [${clients}]`)
//    })
// }

module.exports = {
   connect,
   socket
}