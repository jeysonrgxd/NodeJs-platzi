const store = require('./store')

function addUser (name) {
   console.log(name);
   if(!name){
      return Promise.reject('Incalid name')
   }

   const user = {
      name
   }

   return store.add(user)
}

function listUsers(){
   // return Promise.resolve(store.list())
   return store.list()
}

module.exports = {
   addUser,
   listUsers
}