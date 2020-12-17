require("dotenv").config()

// creamos un objeto donde obtenemos las varaibles de entorno que se crearan tanto al deployar como de nuestro archivo .env
const config = {
   dev: process.env.NODE_ENV !== 'production',
   port: process.env.PORT || 3000,
   cors:process.env.CORS,
   dbUser:process.env.DB_USER,
   dbPassword:process.env.DB_PASSWORD,
   dbHost:process.env.DB_HOST,
   dbName:process.env.DB_NAME
}

module.exports = { config }