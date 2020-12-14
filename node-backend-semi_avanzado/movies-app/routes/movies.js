const { Router } = require("express")
// const { moviesMocks } = require("../utils/mocks/movies") //ya no lo nesesitamos por que usaremos un services
const MoviesService = require('../services/movies');

// esta funcion recive una aplicacion de express lo que nos permite ser dinamicos y tener el control de que aplicaicon va a consumir nuestras rutas
function moviesApi(app) {
   const router = Router()
   app.use('/api/movies', router) //la aplicacion usara esta ruta

   // La unica responsabilidad de las rutas es saber como recivir parametros y como se los envia a los servicios mientras que los servicios si saben que hacer con todos estos parametros y estos datos saben devolver la informacion que le estamos requiriendo
   const moviesService = new MoviesService();

   // alimentamos el rauter con als otras rutas
   router.get("/", async function (req, res, next) {
      const { tags } = req.query

      //  como es codigo sincrono asemos el try catch
      try {
         // utilizamops un promise.resolve para poder utilizar await y resolver la promesa que este devielve
         const movies = await moviesService.getMovies({ tags })

         res.status(200).json({
            data: movies,
            message: "Movies Listed"
         })

      } catch (error) {
         next(error) //le decimos a express que maneje el error con next
      }
   })

   router.get("/:movieID", async function (req, res, next) {
      const { movieId } = req.params

      //  como es codigo sincrono asemos el try catch
      try {
         // utilizamops un promise.resolve para poder utilizar await y resolver la promesa que este devielve, lo cual es la primera pelicula que viene de nuestro mock
         const movies = await moviesService.getMovie({ movieId })

         res.status(200).json({
            data: movies,
            message: "Movies retrieved"
         })

      } catch (error) {
         next(error) //le decimos a express que maneje el error con next
      }
   })

   router.post("/", async function (req, res, next) {
      const { body: movie } = req //obtenemos el body

      //  como es codigo sincrono asemos el try catch
      try {
         // utilizamops un promise.resolve para poder utilizar await y resolver la promesa que este devielve, devolvemos el id del primer mocks
         const createdMovieId = await moviesService.createMovie({ movie })

         res.status(200).json({
            data: createdMovieId,
            message: "Movies created"
         })

      } catch (error) {
         next(error) //le decimos a express que maneje el error con next
      }
   })

   router.put("/:movieId", async function (req, res, next) {
      const { body: movie } = req
      const { movieId } = req.params

      //  como es codigo sincrono asemos el try catch
      try {
         // utilizamops un promise.resolve para poder utilizar await y resolver la promesa que este devielve
         const updatedMovieId = await moviesService.updateMovie({ movie, movieId })

         res.status(200).json({
            data: updatedMovieId,
            message: "Movies updated"
         })

      } catch (error) {
         next(error) //le decimos a express que maneje el error con next
      }
   })

   router.delete("/:movieId", async function (req, res, next) {
      const { movieId } = req.params

      //  como es codigo sincrono asemos el try catch
      try {
         // utilizamops un promise.resolve para poder utilizar await y resolver la promesa que este devielve
         const deleteMovieId = await moviesService.deleteMovie({ movieId })

         res.status(200).json({
            data: deleteMovieId,
            message: "Movies deleted"
         })

      } catch (error) {
         next(error) //le decimos a express que maneje el error con next
      }
   })



}

module.exports = moviesApi