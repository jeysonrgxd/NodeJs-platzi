// ACA ESTARA TODA LA LOGICA DE ALMACENAMIENTO

// importamos nuestro modelo
const Model = require("./model")

// creamos un mocks (simulación de una base de datos) para probar nuestras funciones, rutas y servidor
// const list = []

const addMessage = (message) => {
   // list.push(message)
   // creamos el documento message apartir de nuestro modelo
   const myMessage = new Model(message)
   myMessage.save()

}

const getMessage = async (filterUser) => {
   // return list

   // creamos un objeto filter para pasarselo al find de mongose
   let find = {}
   if(filterUser !== null){
      find = {user:filterUser}
   }
   //el find si no le especificamos nada nos trae todos los documentos
   const messages = await Model.find(find)
   return messages
}

const updateText = async (id,message) => {
   // const findMessage = await Model.findByIdAndUpdate()

   // nos devuelve un objeto de tipo Model message, pero con su cuerpo accesible mediante .message ._id
   const findMessage = await Model.findOne({
      _id:id
   })

   // const updateMessage = await Model.findOneAndUpdate({_id:id},{message},{new:true})

   // cambiamos el mensage del user con el id que buscamos, con el message que estamos obteniendo, y como es de tipo Model luego guardamos
   findMessage.message = message

   const newMessage = await findMessage.save()

   return newMessage;

}

const removeMessage = async (id) =>{
   const userRemove = await Model.deleteOne({
      _id:id
   })

   return userRemove
}

module.exports = {
   add: addMessage,
   list: getMessage,
   updateText,
   remove: removeMessage
   
}