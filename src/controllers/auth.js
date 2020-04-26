const authModel = require('../models/auth')
const helper = require('../helpers')
const jwt = require('jsonwebtoken')

module.exports = {
    postUser: async function (request, response) {
        try {
            const setData = request.body

            const result = await authModel.postUser(setData)

            helper.response(response, 200, result)
        } catch (error) {
            helper.response(response, 500, error)
        }
    },
    postLogin: async function (request, response) {
        try {
            const getData = request.body

            const result = await authModel.postLogin(getData)
            if (result === undefined) {
                helper.response(response, 200, {
                    message: "Username atau password salah"
                })
            } else {
                const token = jwt.sign({
                    result
                }, "KODERAHASIA", {
                    expiresIn: '1m'
                }) //token primary
                //refresh token
                const newData = {
                    ...result,
                    token
                }

                helper.response(response, 200, newData)
            }

        } catch (error) {
            console.log(error)
            helper.response(response, 500, error)
        }
    }
}