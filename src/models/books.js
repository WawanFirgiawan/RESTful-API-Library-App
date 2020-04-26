//Models : Membuat Fungsi
const connection = require('../config/mysql')

module.exports = {
    getBooks: function () {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT * FROM books', function (error, result) {
                //connection.query('SELECT books.title, books.description, genre.genre, author.name_author, status.status, books.updated_at, books.created_at FROM books INNER JOIN genre ON books.id_genre = genre.id INNER JOIN author ON books.id_author = author.id INNER JOIN status ON books.id_status = status.id', function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postBooks: function (setData) {
        return new Promise(function (resolve, reject) {
            connection.query('INSERT INTO books SET ?', setData, function (error, result) {
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
    putBooks: function (setData, id) {
        return new Promise(function (resolve, reject) {
            connection.query('UPDATE books SET ? WHERE id = ?', [setData, id], function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
    },
    deleteBooks: function (id) {
        return new Promise(function (resolve, reject) {
            connection.query('DELETE FROM books WHERE id = ?', id, function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(error)
                }
            })
        })
    },

    //Get Search Data Book
    getSearchBook: function (name) {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT * from books WHERE title LIKE ?"%"', name, function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },

    //Get Sort Data Book
    getSortBook: function (limit, startIndex, column, sort) {
        return new Promise(function (resolve, reject) {
            if (sort == "asc") {
                connection.query('SELECT books.id, books.title, books.description, books.image, genre.genre as genre, author.genre as author, books.status, books.created_at, books.updated_at FROM books LEFT JOIN author ON author.id=books.author_id INNER JOIN genre ON genre.id=books.genre_id ORDER BY ?? asc  LIMIT ? OFFSET ?', [column, limit, startIndex], function (error, result) {
                    //id, title, description, image, id_genre, id_author, id_status, created_at, updated_at
                    if (!error) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                })
            } else {
                connection.query('SELECT books.id, books.title, books.description, books.image, genre.genre as genre, author.genre as author, books.status, books.created_at, books.updated_at FROM books LEFT JOIN author ON author.id=books.author_id INNER JOIN genre ON genre.id=books.genre_id ORDER BY ?? desc  LIMIT ? OFFSET ?', [column, limit, startIndex], function (error, result) {
                    if (!error) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                })
            }
        })
    },

    //Get Sort Data Pagination
    getBooksPagination: function (limit, startIndex) {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT books.id, books.title, books.description, books.image, genre.genre as genre, author.genre as author, books.status, books.created_at, books.updated_at FROM books LEFT JOIN author ON author.id=books.author_id INNER JOIN genre ON genre.id=books.genre_id ORDER BY ?? LIMIT ? OFFSET ?', [limit, startIndex], function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },

    getCount: function () {
        return new Promise(function (resolve, reject) {
            connection.query('SELECT COUNT(*) as count from books', function (error, result) {
                if (!error) {
                    resolve(result[0].count)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
}