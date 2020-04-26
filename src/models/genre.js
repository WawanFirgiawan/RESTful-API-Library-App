//Models : Membuat Fungsi
const connection = require('../config/mysql')

module.exports = {
    getGenre: function () {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT * FROM genre', function (error, result) {

                //connection.query('SELECT Genre.title, Genre.description, genre.genre, author.name_author, status.status, Genre.updated_at, Genre.created_at FROM Genre INNER JOIN genre ON Genre.id_genre = genre.id INNER JOIN author ON Genre.id_author = author.id INNER JOIN status ON Genre.id_status = status.id', function (error, result) {

                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postGenre: function (setData) {
        return new Promise(function (resolve, reject) {
            connection.query('INSERT INTO genre SET ?', setData, function (error, result) {
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
    putGenre: function (setData, id) {
        return new Promise(function (resolve, reject) {
            connection.query('UPDATE genre SET ? WHERE id = ?', [setData, id], function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
    },
    deleteGenre: function (id) {
        return new Promise(function (resolve, reject) {
            connection.query('DELETE FROM genre WHERE id = ?', id, function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
    }
}