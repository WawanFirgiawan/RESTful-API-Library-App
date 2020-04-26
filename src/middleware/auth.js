const jwt = require('jsonwebtoken')
const helper = require('../helpers')

module.exports = {
    authorization: function (request, response, next) {
        const token = request.headers.authorization
        jwt.verify(token, "KODERAHASIA", function (error, result) {
            if (error && error.name === "TokenExpiredError" || error && error.name === "JsonWebTokenError") {
                return helper.response(response, 401, {
                    message: error.name
                })
            } else {
                request.token = result
                next()
            }
        })
    }
}