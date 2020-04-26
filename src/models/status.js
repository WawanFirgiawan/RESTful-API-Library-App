//Models : Membuat Fungsi
const connection = require('../config/mysql')

module.exports = {
    getStatus: function () {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT * FROM status', function (error, result) {

                //connection.query('SELECT Status.title, Status.description, genre.genre, author.name_author, status.status, Status.updated_at, Status.created_at FROM Status INNER JOIN genre ON Status.id_genre = genre.id INNER JOIN author ON Status.id_author = author.id INNER JOIN status ON Status.id_status = status.id', function (error, result) {

                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postStatus: function (setData) {
        return new Promise(function (resolve, reject) {
            connection.query('INSERT INTO status SET ?', setData, function (error, result) {
                if (!error) {
                    const newData = {
                        id: result.insertId,
                        ...setData
                    }

                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    putStatus: function (setData, id) {
        return new Promise(function (resolve, reject) {
            connection.query('UPDATE status SET ? WHERE id = ?', [setData, id], function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
    },
    deleteStatus: function (id) {
        return new Promise(function (resolve, reject) {
            connection.query('DELETE FROM status WHERE id = ?', id, function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
    }
}