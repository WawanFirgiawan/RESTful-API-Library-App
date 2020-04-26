const cors = require('cors-express')
const options = {
    allow: {
        //Ganti dengan url lain untuk melihat error
        origin: '*',
        methods: 'GET,POST,PUT,DELETE,HEAD,OPTIONS',
        headers: 'Content-Type, Authorization, Content-Length, X-Requested-With, X-HTTP-Method-Override'
    },
    expose: {
        headers: null
    },
    max: {
        age: 60
    },
    options: function (req, res, next) {
        if (req.method == 'OPTIONS') {
            res.status(200).end();
        } else {
            next();
        }
    },
    specials: {
        powered: 'Wawan Firgiawan'
    }
}

module.exports = cors(options)