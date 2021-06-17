const express = require('express')
const UserController =require('./users.controller')
const router = express.Router()


router.get('/',UserController.findAll)

router.get('/:id', UserController.findById)

router.post('/',UserController.create)

router.put('/:id',UserController.update)

router.delete('/',UserController.remove)

module.exports = router