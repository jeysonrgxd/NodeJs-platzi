const fs = require('fs')

// leemos el directorio para saber que archivos se encuentran
const file = fs.readdir(__dirname, (err, files) => {
   if (err) {
      console.log(err);
   }

   console.log(files);
})