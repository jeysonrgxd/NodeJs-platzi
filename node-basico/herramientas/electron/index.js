const { app, BrowserWindow } = require('electron') 

// creamos una ventana principal donde se vera la apalicacion
let ventanaPrincipal

// cuando app aya cargado todo ejecutaremos el codigo usando el escuchador de evenos de node
app.on("ready",crearVentana)

// funcion que creara la ventana
function crearVentana(){
   ventanaPrincipal = new BrowserWindow({
      width:800,
      height:600
   })
   // cargamos la aplicacion
   ventanaPrincipal.loadFile('index.html')

}