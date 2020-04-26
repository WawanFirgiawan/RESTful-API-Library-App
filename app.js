const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const roteNavigator = require('./src/index')

const server = app.listen(3000, "127.0.0.1", function () {
    const host = server.address().address
    const port = server.address().port

    console.log("You'ra Connected at" + host + ":" + port)
})

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', roteNavigator)