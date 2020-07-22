// con esto podemos saber cuanto demora un proceso o codigo iniciando y terminando
console.time("Todo")
console.time("Bucle")
let suma = 0
for(let i =0; i<100000000; i++){
   suma +=i
}
console.timeEnd("Bucle")

console.log("Iniciando promesa");
console.time("Promesa")
asincrona()
   .then((resp) => {
      console.timeEnd("Promesa")
})

// POR SER UN PROCESO ASINCRONO EL PROCESO DE TIMEEND DE TODO SE EJECUTARA PRIMERO Y DESPUES LA PROMESA
console.timeEnd("Todo")

function asincrona(){
   return new Promise((resolve) => {
      setTimeout(function () {
         console.log("promesa")
         resolve()
      })
   })
}

// ========== RESULTADO ES: 
/*

Bucle: 142.100 ms
Iniciando promesa
Todo: 156.461 ms
promesa
Promesa: 1007.221 ms

*/


