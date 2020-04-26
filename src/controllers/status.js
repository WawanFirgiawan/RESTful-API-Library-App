//Controller : Ndak bisa mlakukan query
const StatusModels = require('../models/Status')
const helper = require('../helpers')

module.exports = {
    getStatus: async function (request, response) {
        try {
            const result = await statusModels.getStatus()
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    postStatus: async function (request, response) {
        try {
            const setData = request.body
            const result = await statusModels.postStatus(setData)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    putStatus: async function (request, response) {
        try {
            const setData = request.body
            const id = request.params.id
            const result = await statusModels.putStatus(setData, id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    deleteStatus: async function (request, response) {
        try {
            const id = request.params.id
            const result = await statusModels.deleteStatus(id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    }
}