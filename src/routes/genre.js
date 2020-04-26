const express = require('express')
const Route = express.Router()

const genreController = require('../controllers/genre')

Route
  .get('/', genreController.getGenre) //genre
  .post('/', genreController.postGenre)
  .put('/:id', genreController.putGenre)
  .delete('/:id', genreController.deleteGenre)

module.exports = Route