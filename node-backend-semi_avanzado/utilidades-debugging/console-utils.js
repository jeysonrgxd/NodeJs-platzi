// %s string
// %d Integer
// %j JSON

// console.log("Un %s y un %s",'perrito','gatito')

// // es un alias de log
// console.info("Hello word")

// // es un alias de error
// console.warn("Hello word")

// // si hay un error nos muestra que exite un aerror con booleando
// console.assert(1 === "1")

// // nos especifica la linea donde esta corriendo el error
// console.trace("hello")

// debug
const util = require("util")
const debuglog = util.debuglog("foo")

debuglog("hello from foo");