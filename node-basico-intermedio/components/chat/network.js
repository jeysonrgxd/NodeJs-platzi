const { Router } = require("express")
const router = Router()
const controller = require('./controller')
const response = require('../../network/response')

router.get('/:userId', (req, res) => {
   controller.listChats(req.params.userId)
      .then(data => {
         response.success(req, res, data, 201)
      })
      .catch(err => {
         response.error(req, res, 'Unexpected Error', 500, err)
      })
})

router.post('/', (req, res) => {
   controller.addChat(req.body.users)
      .then(data => {
         response.success(req, res, data, 201)
      })
      .catch(err => {
         response.error(req,res,'Internal error',500,err)
      })
})

module.exports = router