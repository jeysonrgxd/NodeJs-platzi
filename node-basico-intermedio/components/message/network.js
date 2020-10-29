// encargada de recibir la peticion http procesamos toda la informacion y enviarla a controllador, todo lo que salga de ahi no es responsabilidad de la capa de red

const { Router } = require("express")
const router = Router()
const response = require('../../network/response')

router.get('/',function (req, res) {
   console.log(req.headers);
   res.header({
      "custom-header": "Nuestro valor personalizado"
   })
   response.success(req, res, 'Lista de mensajes');
});

router.post('/',function (req, res) {
   console.log(req.query);
   if (req.query.error = "ok") {
      response.error(req,res,'Error inesperado',500,'Es solo una simulacion')
   }
   else {
      response.success(req, res, 'Creado correctamente', 201);
   }
})

module.exports = router
