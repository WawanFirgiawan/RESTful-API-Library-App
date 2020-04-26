const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
conn.connect(err => {
    if (err) {
        console.log(`Error \n ${err}`);
    } else {
        console.log("Success Connect To Database");
    }
});

module.exports = conn;


// const mysql = require('mysql')

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'library'
// });

// connection.connect(function (eror) {
//     if (eror) throw error
//     console.log('Database has connected...')
// })

// module.exports = connection