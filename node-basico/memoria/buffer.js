// =========================================
/*
Buffers:
   Los buffer son conjuntos de datos en crudo, datos binarios, que podemos tratar en NodeJS para realizar diversos tipos de acciones
*/
// =========================================

//guardamo un byte de informacion solo un espacio en memoria pero esta vacio
// let buffer =  Buffer.alloc(1) 

// conjuntos de datos binarios
let buffer =  Buffer.from([1,2,3,4,5]) 
let buffer1 =  Buffer.from("Hola") 

console.log(buffer);
console.log(buffer1);
console.log(buffer1.toString());//lo convertimos en leible

// trabajamos buffer poscicios por posicion (aremos un abecedario)
let abc = Buffer.alloc(26)
console.log(abc);

for(let i = 0; i<26; i++){
   // para ir aun aposicion de un buffer que emeos reservado que son 26 espacios en memoria lo asemos como sif uera un array
   abc[i] = i + 97
   // mirar el link d ela tablas assci para entender la pocisiones
   // https://elcodigoascii.com.ar/
}
console.log(abc);
console.log(abc.toString());