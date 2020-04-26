const express = require('express')
const Route = express.Router()
const cors = require('./middleware/cors')

const bookRoutes = require('./routes/books')
const genreRoutes = require('./routes/genre')
const authorRoutes = require('./routes/author')
const statusRoutes = require('./routes/status')

Route.use('/books', cors, bookRoutes)
Route.use('/genre', cors, genreRoutes)
Route.use('/author', cors, authorRoutes)
Route.use('/status', cors, statusRoutes)

module.exports = Route