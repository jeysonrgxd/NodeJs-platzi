const gulp = require("gulp")
const serv = require('gulp-server-livereload')

gulp.task('build',function(cb){
   console.log("Construyendo el sitio");
   setTimeout(cb,1200)
})

// asemos ua tarea para levantar un servidor que este en la escucha
gulp.task('serve', function (cb){
   // establecemos la carpeta de archivos que estara ala escucha
   gulp.src('www')
      .pipe(serv({ //usamos pipe como stream para pasarle , y tulizamos el modulo gulp-server
         livereload: true,
         open: true
      }));
})

//esto es para ejecutar varias tareas 
gulp.task('default',gulp.series('build','serve'))

