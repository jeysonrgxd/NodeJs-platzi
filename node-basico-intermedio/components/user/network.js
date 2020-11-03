const { Router } = require("express")
const router = Router()
const controller = require('./controller')
const response = require('../../network/response')

router.get('/', (req, res) => {
   controller.listUsers()
      .then(data => {
         response.success(req, res, data, 201)
      })
      .catch(err => {
         response.error(req, res, 'Internal error', 500, err)
      })
})

router.post('/', (req, res) => {
   controller.addUser(req.body.name)
      .then(data => {
         response.success(req, res, data, 201)
      })
      .catch(err => {
         response.error(req, res, 'Internal error', 500, err)
      })
})

module.exports = router