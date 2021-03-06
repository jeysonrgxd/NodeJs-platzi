const mongoose = require('mongoose')

// obtenemos la clase(funcion) schema
const Schema = mongoose.Schema

// definimos nuestro esquema
const mySchema = new Schema({
   // user: String,
   // utilizamo un tipo objectId
   chat:{
      type:Schema.ObjectId,
      ref:'Chat',
   },
   user: {
      type:Schema.ObjectId,
      ref:'User'
   },
   message: {
      type: String,
      required: true
   },
   date: Date,
   file:String
})

// creamos un model para exportar el cual le pasamos al model al schema, quiero que todo lo que se cree tenga este schema y se guarde en la base de datos con este nombre

const model = mongoose.model("Message",mySchema)

module.exports = model