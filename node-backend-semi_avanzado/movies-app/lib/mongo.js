const { MongoClient, ObjectId } = require("mongodb")
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
      this.client = new MongoClient(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      this.dbname = DB_NAME
   }

   // usaremos el patron singleton para que cada vez que nos conectemos anuestra base de datos no nos cree un nuevo cliente sino que si el cliente ya esta la conexion ya esta abierta entonses usemos esa misma conexion de esa manera evitamos saturar muchas conexion y tengamos un error en el futuro
   connect() {
      // si no existe la cremos
      if (!MongoLib.connection) {
         MongoLib.connection = new Promise((resolve, reject) => {
            // esta promesa se va resolver cuando llamabos al cliente
            this.client.connect(err => {
               if (err) {
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
   // le pasamos una colleccion aca metodo por que la idea es que funcione con cualquier collecion no solo por pelicula
   getAll(collection, query) {
      // con esto retornamos la base de datos, usamos then ya que utilizamos promesas al crearlo
      return this.connect().then(db => {
         return db.collection(collection).find(query).toArray()
      })
   }

   get(collection, id) {
      return this.connect().then(db => {
         return db.collection(collection).findOne({ _id: ObjectId(id) })
      })

   }

   create(collection, data) {
      return this.connect().then(db => {
         return db.collection(collection).insertOne(data)
      }).then(result => result.insertedId)

   }

   update(collection, id, data) {
      return this.connect().then(db => {
         return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })
      }).then(result => result.upsertedId || id)

   }

   delete(collection, id) {
      return this.connect().then(db => {
         return db.collection(collection).deleteOne({ _id: ObjectId(id) })
      }).then(() => id)

   }

}

module.exports = MongoLib