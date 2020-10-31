// ACA ESTARA TODA LA LOGICA DE ALMACENAMIENTO

// creamos un mocks (simulación de una base de datos) para probar nuestras funciones, rutas y servidor
const list = []

const addMessage = (message) => {
   list.push(message)
}

const getMessage = () => {
   return list
}

module.exports = {
   add: addMessage,
   list: getMessage
}