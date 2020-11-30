const { Transform } = require("stream");

const transformStream = new Transform({
   transform(chunk, encoding, callbak) {
      // this.push(chunk.toString().toUpperCase());

      //reto
      let dataString = chunk.toString()
      this.push(dataString.slice(0, 1).toUpperCase() + dataString.slice(1));
      callbak();
   }
});

// le pasamos despues de recibir en la linea de comandos a transform que instanciamos despues de la damos salida utilizando de nuevo el pipe pero con la salida
process.stdin.pipe(transformStream).pipe(process.stdout);