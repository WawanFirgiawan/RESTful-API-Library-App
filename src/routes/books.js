const express = require('express')
const Route = express.Router()

const bookController = require('../controllers/books')

Route
    .get('/', bookController.getBooks) //Books
    .post('/', bookController.postBooks)
    .put('/:id', bookController.putBooks)
    .delete('/:id', bookController.deleteBooks)

    //search Book
    .get('/search/title', bookController.getSearchBook)
    //sort Book
    .get('/sort', bookController.getSortBook)
    .get('/pagination', bookController.getBooksPagination)

module.exports = Route