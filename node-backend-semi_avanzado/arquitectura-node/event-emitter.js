// VER EL VIDEO ARQUITECTURA ORIENTADA A EVENTOS MIN:7:40
//REPOSITORIO: https://github.com/JasanHdz/backendnodejs/tree/master/notes#arquitectura-orientada-a-eventos
// IMAGEN: https://static.platzi.com/media/user_upload/async-event-es-a53989eb-1bec-4652-aa76-305dd070bd4b.jpg
// EJEMPLOS BUENISIMOS E INTERESANTES
/*
https://medium.com/developers-arena/nodejs-event-emitters-for-beginners-and-for-experts-591e3368fdd2
https://nodejs.org/api/events.html

*/

const EventEmitter = require('events')

// creamos un aclase para eredar de events la spropiedades y metodos y construir nuestro propio registrador de eventos
class Logger extends EventEmitter{
   execute(cb){
      console.log('Before')
      
      // emitimos un evento
      this.emit('start')
      cb()

      // Emitimos otro evento
      this.emit('finish')
      console.log('After')

   }
}

// const logger = new Logger()
const logger = new EventEmitter() //este seria la forma facil sin eredar la clase


// registramos nuestro oyentes(eventos) luego programamos nuestro logica Para los eventos que creamos cuando sean llamados sejecuten
logger.on('start',()=> console.log('STARTING'))
logger.on('finish',()=> console.log('Finishing'))
logger.on('finish',()=> console.log('it\'s Done'))

// desencadenamos los eventos que creamos
logger.emit('start',)
logger.emit('finish')

// logger.execute(() => console.log("Hello World")); esto es con la clase y la erencia
