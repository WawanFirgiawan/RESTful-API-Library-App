const connection = require('../config/mysql')

module.exports = {
    postUser: function(setData) {
        return new Promise (function(resolve, reject) {
            connection.query('INSERT INTO user SET ?', setData, function (error, result){
                if (!error){
                    const newResult = {
                        id: result.insertId,
                        ...setData
                    }
                    delete newResult.password
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postLogin: function(getData) {
        return new Promise (function(resolve, reject) {
            connection.query('SELECT id, email, role FROM user WHERE email=? AND password=?', [getData.email, getData.password], function(error, result) {
                if (!error){
                    resolve(result[0])
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}