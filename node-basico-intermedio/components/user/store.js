// ACA ESTARA TODA LA LOGICA DE ALMACENAMIENTO

// importamos nuestro modelo
const Model = require("./model")

function addUser(user){
   const myUser = new Model(user)
   // esto me devuelve una promesa
   return myUser.save()
}

async function listUsers(){
   const getUsers = Model.find()
   return getUsers
}

module.exports = {
   add: addUser,
   list: listUsers,
   // updateText,
   // remove: removeMessage

}