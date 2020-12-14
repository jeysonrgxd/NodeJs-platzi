//CAPA DE SERVICIOS MANEJAMOS LA LOGICA DE NEGOCIO 
//la responsabilidad de servir alos mocks ahora pasa a la capa services
const { moviesMocks } = require("../utils/mocks/movies")

class MoviesService {

   // recordar una funcion asyncrona siempre devuelve una promesa

   async getMovies() {
      const movies = await Promise.resolve(moviesMocks)
      return movies || [];
   }

   async getMovie() {
      const movie = await Promise.resolve(moviesMocks[0])
      return movie || {};
   }

   async createMovie() {
      const createMovieId = await Promise.resolve(moviesMocks[0].id)
      return createMovieId
   }

   async updateMovie() {
      const updateMovieId = await Promise.resolve(moviesMocks[0].id)
      return updateMovieId
   }

   async deleteMovie() {
      const deleteMovieId = await Promise.resolve(moviesMocks[0].id)
      return deleteMovieId
   }
}

module.exports = MoviesService