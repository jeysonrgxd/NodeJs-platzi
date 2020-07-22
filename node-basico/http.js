// importamos la libreria nativa de node http
const http = require('http')

// creamos la funcion raouter el cual pasaremos como parametro a createServer
const router= (req,res) => {
   console.log(req.url)
   // creando ruta
   switch (req.url) {
      case '/saludo':
         res.writeHead(201, {
            'Content-type': 'text/html; charset=UTF-8'
         })
         res.write("<h1>hola mundo</h1>")
         res.end()

         break;
      default:
         res.writeHead(404, {
            'Content-type': 'text/html; charset=UTF-8'
         })
         res.write('<h2 style ="color:red; font-wight">Error pagina no encontra</h2>')
         res.end()
   }
}

// creamos el servidor el cual recive un callback con dos parametros, en esta caso lo llamamos router 
const serve = http.createServer(router)


serve.listen(3000,(rs)=>{
   console.log("escuchando servidor en el puerto 3000")
})