const express = require("express")
const app = express()
const server = require('http').Server(app)
const cors = require("cors")
const config = require("./config/config")

const path = require("path")

// traemos el sockter
const socket = require('./socket')

// traemos la base de datos
const db = require('./db')
db(config.mongoURL)

// importamos el router que tendra todas la rutas conectado a cada componente
const router = require('./network/routes')

// configuramos los middleware para trabjar con datos json y formularios
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
// le pasamos el servidor al socket
socket.connect(server)

// ejecutamos pasando la app ya que dentro de esa app se encuentra .use 
router(app)

// especificamos archivos staticos
const publicDirectory = path.join(__dirname, './public')
app.use('/app',express.static(publicDirectory));

// corremos el servidor
server.listen(3000, () => {
   console.log(`Server started on port ${process.env.PORT || 3000}`)
})
