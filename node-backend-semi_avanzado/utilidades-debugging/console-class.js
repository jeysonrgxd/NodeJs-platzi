const fs = require("fs")

const out = fs.createWriteStream("./out.log");
const err = fs.createWriteStream("./err.log");

// recibe dos wriatebleStream uno para el console.log y console.info escribira la data ai, el segundo writableStream es para que escriba el console.error
const consoleFile = new console.Console(out,err)

setInterval(()=>{
   consoleFile.log(new Date())
   consoleFile.error(new Error("Ooops.!"))
},2000)
