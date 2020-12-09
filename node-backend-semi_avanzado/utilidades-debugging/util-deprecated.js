const util = require("util");

// con esto informamos que una funcion esta deprecada y que en futuro puede ser remplazado op eliminado ma sque todo sirve para crear una libreria y especificar tus funciones el cual las actualizaras
const helloPluto = util.deprecate(()=>{
   console.log("Hello puto")
},'pluto es deprecated. It is not a planet anumore');

helloPluto()