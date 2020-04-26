//Models : Membuat Fungsi
const connection = require('../config/mysql')

module.exports = {
    getAuthor: function () {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT * FROM author', function (error, result) {

                //connection.query('SELECT Author.title, Author.description, genre.genre, author.name_author, status.status, Author.updated_at, Author.created_at FROM Author INNER JOIN genre ON Author.id_genre = genre.id INNER JOIN author ON Author.id_author = author.id INNER JOIN status ON Author.id_status = status.id', function (error, result) {

                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postAuthor: function (setData) {
        return new Promise(function (resolve, reject) {
            connection.query('INSERT INTO author SET ?', setData, function (error, result) {
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
    putAuthor: function (setData, id) {
        return new Promise(function (resolve, reject) {
            connection.query('UPDATE author SET ? WHERE id = ?', [setData, id], function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
    },
    deleteAuthor: function (id) {
        return new Promise(function (resolve, reject) {
            connection.query('DELETE FROM author WHERE id = ?', id, function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
    }
}