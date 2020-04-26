//Controller : Ndak bisa mlakukan query
const genreModels = require('../models/Genre')
const helper = require('../helpers')

module.exports = {
    getGenre: async function (request, response) {
        try {
            const result = await genreModels.getGenre()
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    postGenre: async function (request, response) {
        try {
            const setData = request.body
            const result = await genreModels.postGenre(setData)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    putGenre: async function (request, response) {
        try {
            const setData = request.body
            const id = request.params.id
            const result = await genreModels.putGenre(setData, id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    deleteGenre: async function (request, response) {
        try {
            const id = request.params.id
            const result = await genreModels.deleteGenre(id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    }
}