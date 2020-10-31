// aca ira la logica de negocio validaciones requisitos eliminar aumentar algo , requerimientos del cliente de como funcionara o que ara

const store = require('./store')

// recive dos parametros , quien la añade y que es lo que añade
function addMessage (user,message){

   return new Promise((resolve,reject)=>{

      if(!user){
         console.error('[messageController] No hay usuario o mensaje')
         return reject('Los datos son incorrectos')
      }

      const fullMessage = {
         user:user,
         message:message,
         date: new Date()
      }
      store.add(fullMessage)
      resolve(fullMessage)
   })

}

function getMessage(){
   return new Promise((resolve,reject)=>{
      resolve(store.list());
   })
}

module.exports = {
   addMessage,
   getMessage
}