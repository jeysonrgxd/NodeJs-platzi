const express = require('express');
const app = express();

// traemos la configuracion
const { config } = require('./config/index');
// importamos nuesta funcion que generara nuestra rutas pasandole la app de express
const moviesApi = require("./routes/movies")

// ejecutamos la funcion el cual generara nuestras rutas con la logica pasandole ala funcion la app
moviesApi(app);


app.listen(config.port, function () {
   console.log(`Listening http://localhost:${config.port}`);
});