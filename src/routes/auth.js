const express = require('express')
const Route = express.Router()

const authController = require('../controllers/auth')

Route
    .post('/register', authController.postUser) // / = /products
    .post('/login', authController.postLogin)
// .put('/:id', productController.putProduct)
// Route.delete('/:id')

module.exports = Route