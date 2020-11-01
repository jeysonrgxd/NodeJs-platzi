// aca ira la logica de negocio validaciones requisitos eliminar aumentar algo , requerimientos del cliente de como funcionara o que ara

const store = require('./store')

// recive dos parametros , quien la añade y que es lo que añade
function addMessage(user, message) {

   return new Promise((resolve, reject) => {

      if (!user) {
         console.error('[messageController] No hay usuario o mensaje')
         return reject('Los datos son incorrectos')
      }

      const fullMessage = {
         user: user,
         message: message,
         date: new Date()
      }
      store.add(fullMessage)
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

function deleteMessage(id){
   return new Promise((resolve,reject)=>{
      if(!id){
         reject('Id invalido')
         return false
      }
      store.remove(id)
         .then(()=>{
            resolve()
         })
         .catch(e=>{
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