const bcrypt = require("bcrypt")

const password = '1234Segura!';

function getHash() {
   password_encrypt = "hola jeyson como estas"
}

bcrypt.hash(password, 5, function(err, hash){
   let password_encrypt = hash
   console.log(password_encrypt)

   // verificamos si el password genera el hash
   bcrypt.compare(password,hash, function(err,res){
      console.log(res)
   })
})
