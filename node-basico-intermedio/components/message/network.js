// encargada de recibir la peticion http procesamos toda la informacion y enviarla a controllador, todo lo que salga de ahi no es responsabilidad de la capa de red

const { Router } = require("express")
const router = Router()
const controller = require('./controller')
const response = require('../../network/response')
const multer = require("multer")
const path = require("path")

// esto funciona bien en linux ya que reconoce el archivo y le pone por asi decirlo la extencion que pertenece
// const upload = multer({
//    dest: 'public/files/'
// })

// metodo recomendado para poder trabajar bien tanto en linux como en windows para reconer la extencion
const storage = multer.diskStorage({
   destination: 'public/files/',
   filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
   }
})

const upload = multer({
   storage
}) 

router.get('/', function (req, res) {

   const filterMessages = req.query.chat || null

   // res.header({
   //    "custom-header": "Nuestro valor personalizado"
   // })
   // response.success(req, res, 'Lista de mensajes');
   controller.getMessage(filterMessages)
      .then(resp => {
         response.success(req, res, resp, 201)
      })
      .catch(err => {
         response.error(req, res, 'Unexpected Error', 500, err)
      })

});

// ruta para creacion de messages
router.post('/', upload.single("file"), function (req, res) {
   console.log(req.file);

   controller.addMessage(req.body.chat,req.body.user, req.body.message,req.file)
      .then((fullMessage) => {

         response.success(req, res, fullMessage, 201)
      })
      .catch(e => {
         response.error(req, res, 'informacion invalida', 400, 'Error en el controlador')

      })
})

// modificaciones parciales
router.patch('/:id', (req, res) => {
   controller.updateMessage(req.params.id, req.body.message)
      .then((data) => {
         response.success(req, res, data, 200)
      })
      .catch(e => {
         response.error(req, res, 'Error interno', 500, e)
      })
})


router.delete('/:id',(req,res)=>{
   controller.deleteMessage(req.params.id)
      .then(()=>{
         response.success(req,res, `Usuario ${req.params.id} eliminado`,200)
      })
      .catch(e=>{
         response.error(req,res,'Error interno',500,e)
      })
})
module.exports = router
