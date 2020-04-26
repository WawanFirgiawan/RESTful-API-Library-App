//Controller : Ndak bisa mlakukan query
const bookModels = require('../models/Books')
const helper = require('../helpers')
const multer = require('multer')
const config = require('../config/uploads')
//const helper = require('../helpers/uploads')

const errorHandling = config.single('image')
module.exports = {
    getBooks: async function (request, response) {
        try {
            const result = await bookModels.getBooks()

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },

    //Post Book
    postBooks: async function (request, response) {
        errorHandling(request, response, async function (error) {
            if (error instanceof multer.MulterError) {
                return helper.response(response, 500, error)
            } else if (error) {
                return helper.response(response, 500, error)
            }

            try {
                if (!request.file) {
                    return helper.response(response, 500, 'Please choosing files...')
                } else {
                    const setData = request.body
                    setData.image = request.file.filename
                    const result = await bookModels.postBooks(setData)
                    return helper.response(response, 200, result)
                }
            } catch (error) {
                return helper.response(response, 500, error)
            }
        })
    },


    putBooks: async function (request, response) {
        try {
            const setData = request.body
            const id = request.params.id
            const result = await bookModels.putBooks(setData, id)

            return helper.response(response, 200, result)
        } catch {
            return helper.response(response, 500, error)
        }
    },

    deleteBooks: async function (request, response) {
        try {
            const id = request.params.id
            const result = await bookModels.deleteBooks(id)

            return helper.response(response, 200, result)
        } catch {
            return helper.response(response, 500, error)
        }
    },

    getSearchBook: async function (request, response) {
        try {
            const name = request.query.title

            const result = await booksModels.getSearchBook(name)
            return helper.response(response, 200, result)

        } catch (error) {
            return helper.response(response, 500, error)

        }

    },
    getSortBook: async function (request, response) {



        try {

            const resCount = await booksModels.getCount()
            var totalPages = Math.ceil(resCount / request.query.limit) // pembulatan keatas, floor pembulatan kebawah
            const limit = parseInt(request.query.limit)
            if (request.query.page <= 0 || limit <= 0) {
                helper.response(response, 500, {
                    message: "limit or page must more than 0"
                })
            }
            if (request.query.page > totalPages) {
                request.query.page = totalPages
            }
            const page = parseInt(request.query.page)
            const startIndex = (page - 1) * limit

            const sort = request.query.orderBy
            const column = request.query.sortBy
            const result = await booksModels.getSortBook(limit, startIndex, column, sort)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)

        }

    },

    getBooksPagination: async function (request, response, next) {
        try {
            const resCount = await booksModels.getCount()
            var totalPages = Math.ceil(resCount / request.query.limit)
            const limit = parseInt(request.query.limit)
            if (request.query.page <= 0 || limit <= 0) {
                helper.response(response, 500, {
                    message: "limit or page must more than 0"
                })

            }
            if (request.query.page > totalPages) {
                request.query.page = totalPages
            }
            const page = parseInt(request.query.page)
            const startIndex = (page - 1) * limit

            // console.log(request.query.page)
            const result = await booksModels.getBooksPagination(limit, startIndex)
            return helper.response(response, 200, result)

        } catch (error) {
            return helper.response(response, 500, error)

        }
    }
}