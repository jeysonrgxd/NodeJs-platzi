// esto mayormente se usa para cosas o archivos muy grandes
const fs = require("fs")
const stream = require("stream")
const util = require("util")
let data = ''

// leemos un stream algo como byte por byte, nos bienen datos por eso no hay callbacks
// let readableStream = fs.createReadStream(__dirname + '/imagen.jpg')
let readableStream = fs.createReadStream(__dirname + '/info.txt')

// si sabemos que tipo de codificacion vendra entonses podemos decirle que codificacion tendra nuestro chunks
readableStream.setEncoding("UTF8");

// escuchar el eventos donde nos vienen datos
// readableStream.on("data",function(chunks){
//   lo comentamos por que ya declaramos el encoding que tendra el cual es el UTF8
   // console.log(chunks.toString());
   // console.log(chunks);
   // data += chunks
// })

// readableStream.on("end",function(){
//    console.log("Termino la carga y el resultado es:");
//    console.log(data);
// })

// creamos streem de escritura utilizaremos salida del sistema
// process.stdout.write("hola")
// process.stdout.write("que")
// process.stdout.write("tal")

// buffer intermedio recivir un dato modificarlo y escribirlo
// este es un stream doble que puede leer y escribir
const Transform = stream.Transform  

// practicamente todo esto es una herencia para que mayus obtenga de Transform los metodos y atributos (Creas tu clase de transformaciones usando Transform)
function Mayus() {
   Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codifi, callback) {
   // byte por byte letra por letra en esta caso
   chunkMayus = chunk.toString().toUpperCase();
   this.push(chunkMayus);
   callback();
}

var mayus = new Mayus();

// aca le pasamos un primero que pase por mayus como si fuera un filtro y despues la salida por  process.stdout
readableStream.pipe(mayus).pipe(process.stdout);