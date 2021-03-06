const mongoose = require('mongoose')

// obtenemos la clase(funcion) schema
const Schema = mongoose.Schema

// definimos nuestro esquema
const mySchema = new Schema({
   name:String,
})

// creamos un model para exportar el cual le pasamos al model al schema, quiero que todo lo que se cree tenga este schema y se guarde en la base de datos con este nombre

const model = mongoose.model("User", mySchema)

module.exports = model