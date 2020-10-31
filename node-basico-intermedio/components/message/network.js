// encargada de recibir la peticion http procesamos toda la informacion y enviarla a controllador, todo lo que salga de ahi no es responsabilidad de la capa de red

const { Router } = require("express")
const router = Router()
const controller = require('./controller')
const response = require('../../network/response')

router.get('/', function (req, res) {

   // res.header({
   //    "custom-header": "Nuestro valor personalizado"
   // })
   // response.success(req, res, 'Lista de mensajes');
   controller.getMessage()
      .then(resp => {
         response.success(req,res,resp,201)
      })
      .catch(err => {
         response.error(req,res,'Unexpected Error',500,err)
      })

});

router.post('/', function (req, res) {
   controller.addMessage(req.body.user, req.body.message)
      .then((fullMessage) => {

         response.success(req, res, fullMessage, 201)
      })
      .catch(e => {
         response.error(req, res, 'informacion invalida', 400, 'Error en el controlador')

      })
})

module.exports = router
