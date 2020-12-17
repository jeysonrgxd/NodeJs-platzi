const { MongoClient } = require("mongodb")
// traemos nuestro archivo de configuracion para construir nuestra url con las variables de entorno
const { config } = require("../config/index")

// creamos las diferentes constantes para reutilizarlos mas adelante
// encodeURIComponent nos ayuda alimpiar si trae caracteres rraros
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

// ahora si creamos nuestra cadena de conexion(Url)
const MONGO_URL = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`

class MongoLib {

   constructor() {
      // instanciamos la clase de cliente conexion de mongo y le expecificamos que queremos que utilize el nuevo parseo url 
      this.client = new MongoClient(MONGO_URL, { useNewUrlParser: true })
      this.dbname = DB_NAME
   }

   // usaremos el patron singleton para que cada vez que nos conectemos anuestra base de datos no nos cree un nuevo cliente sino que si el cliente ya esta la conexion ya esta abierta entonses usemos esa misma conexion de esa manera evitamos saturar muchas conexion y tengamos un error en el futuro
   connect() {
      // si no existe la cremos
      if (!MongoLib.connection) {
         MongoLib.connection = new Promise((resolve, reject)=>{
            // esta promesa se va resolver cuando llamabos al cliente
            this.client.connect(err => {
               if(err) {
                  reject(err)
               }

               // console.log('Connect succesfully to mongo')
               // escojemos la base de datos mandandole el nombre que le pusimos al atributo inicializado en el constructor
               resolve(this.client.db(this.dbname))

            })
         })
      }

      return MongoLib.connection
   }
}

module.exports = MongoLib