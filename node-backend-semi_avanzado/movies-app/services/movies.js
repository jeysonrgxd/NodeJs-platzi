//CAPA DE SERVICIOS MANEJAMOS LA LOGICA DE NEGOCIO 
//la responsabilidad de servir alos mocks ahora pasa a la capa services
// const { moviesMocks } = require("../utils/mocks/movies")

// importamos nuestra libreria de mongo creada
const MongoLib = require("../lib/mongo.js")

class MoviesService {

   constructor() {
      // inicialisamos nuestra colleccion
      this.collection = 'movies'
      this.mongoDB = new MongoLib()
   }

   // recordar una funcion asyncrona siempre devuelve una promesa

   async getMovies({ tags }) {
      const query = tags && { tags: { $in: tags } }
      // const movies = await Promise.resolve(moviesMocks)
      const movies = await this.mongoDB.getAll(this.collection, query)
      return movies || [];
   }

   async getMovie({ movieId }) {
      // const movie = await Promise.resolve(moviesMocks[0])
      const movie = await this.mongoDB.get(this.collection, movieId)
      return movie || {ok:false};
   }

   async createMovie({ movie }) {
      // const createMovieId = await Promise.resolve(moviesMocks[0].id)
      const createMovieId = await this.mongoDB.create(this.collection, movie)
      return createMovieId
   }

   async updateMovie({ movieId, movie } = {}) {
      // const updateMovieId = await Promise.resolve(moviesMocks[0].id)
      const updateMovieId = await this.mongoDB.update(this.collection, movieId, movie)
      return updateMovieId
   }

   async deleteMovie({ movieId }) {
      // const deleteMovieId = await Promise.resolve(moviesMocks[0].id)
      const deleteMovieId = await this.mongoDB.delete(this.collection, movieId)
      return deleteMovieId
   }
}

module.exports = MoviesService