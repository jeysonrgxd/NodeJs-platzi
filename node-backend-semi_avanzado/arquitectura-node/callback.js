// Enter que usando callback en funciones como parametro, nos ayudaria hacer una libreria o algo que queramos que los demas utilizen, ya que primero asemos nuestra logica despues le pasamos parametros al callback para que el cliente o quien utilize nuestra funcion reciva los parametros del callback y pueda hacer con ellos lo que desee, un ejemplo de esto seria el modulo mysql donde antes del callback la funcion el cual el cliente usara , primero nosotros asemos la consulta y recuperamos los datos despues ejecutamos el callback pasandole la informacion y un error si es que lo hubiera.
const asyncCallback = function (cb) {
   setTimeout(() => {
      if (Math.random() < 0.5) {
         // Concepto Error First Callback: 
         return cb(null, 'hola mundo')
      }
      else {
         return cb(new Error('Hello Error'))
      }

   }, 500);
}

asyncCallback((err, msg) => {
   // Verificar si existe el error
   if (err) {
      console.log('Error', err)
   }
   else {
      console.log('mensage', msg)
   }
})