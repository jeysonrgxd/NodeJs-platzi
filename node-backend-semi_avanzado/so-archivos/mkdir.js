const fs = require("fs")

fs.mkdir("platzi/node", { recursive: true }, err => {
   if (err) {
      console.log(err);
   }
   console.log("Fue creado las carpetas");
})