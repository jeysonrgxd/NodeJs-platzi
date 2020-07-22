/*
  
Error First Callbacks
Los Error First Callbacks se utilizan para pasar primero el error y los datos posteriormente.Entonces, puedes verificar el primer argumento, es decir, el objeto de error para ver si algo salió mal y puedes manejarlo.En caso de que no haya ningún error, puedes utilizar los argumentos posteriores y seguir adelante.

 */

function asincrona(callback){
   setTimeout(function(){
      try {
         let a = 3 +z
         callback(null,a)
      } catch (e) {
         callback(e,null)
      }
   },1000)
}

asincrona(function(err,dato){
   if(err){
      console.log("Se encontro un error");
      console.log(err);
      //throw err  no funciona en una funcion asincrona
      return false //detenemos el proceso de la funcion ya que encontramos un error
   }
   console.log("no hay error")
})