// aca ira la logica de negocio validaciones requisitos eliminar aumentar algo , requerimientos del cliente de como funcionara o que ara
const store = require('./store')
// nos traemos solo el objeto socket el cual tiene la propiedad io que utilizaremos para emitir los mensaje
const { socket } = require('../../socket')

// recive dos parametros , quien la añade y que es lo que añade
function addMessage(chat, user, message, file) {

   return new Promise((resolve, reject) => {

      if (!user || !message || !chat) {
         console.error('[messageController] No hay usuario o mensaje')
         return reject('Los datos son incorrectos')
      }

      let fileUrl = '';
      if (file) {
         fileUrl = 'http://localhost:3000/app/files/' + file.filename
      }

      const fullMessage = {
         chat: chat,
         user: user,
         message: message,
         date: new Date(),
         file: fileUrl
      }
      store.add(fullMessage)

      // emitimos los mensajes atravez de nuestro socket creado
      socket.io.emit('message', fullMessage)

      resolve(fullMessage)
   })

}

function getMessage(filterUser) {
   return new Promise((resolve, reject) => {
      resolve(store.list(filterUser));
   })
}

function updateMessage(id, message) {
   return new Promise(async (resolve, reject) => {
      if (!id || !message) {
         reject('Invalid data')
         return false
      }
      // llamamos ala funcion de storage que se conecta con la base de datos
      const result = await store.updateText(id, message)
      resolve(result)
   })
}

function deleteMessage(id) {
   return new Promise((resolve, reject) => {
      if (!id) {
         reject('Id invalido')
         return false
      }
      store.remove(id)
         .then(() => {
            resolve()
         })
         .catch(e => {
            reject(e)
         })
   })
}

module.exports = {
   addMessage,
   getMessage,
   updateMessage,
   deleteMessage
}