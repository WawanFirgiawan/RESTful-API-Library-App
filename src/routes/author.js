const express = require('express')
const Route = express.Router()

const authorController = require('../controllers/author')

Route
  .get('/', authorController.getAuthor) //Author
  .post('/', authorController.postAuthor)
  .put('/:id', authorController.putAuthor)
  .delete('/:id', authorController.deleteAuthor)

module.exports = Route