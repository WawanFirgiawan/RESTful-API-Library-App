const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

const upload = multer({
    storage: multer.diskStorage({
        destination: (request, file, callback) => {
            callback(null, path.join(__dirname, '../uploads'))
        },
        filename: (request, file, callback) => {
            let customFileName = crypto.randomBytes(18).toString('hex'),
                fileExtension = file.originalname.split('.')[1]
            callback(null, customFileName + '.' + fileExtension)
        },
    }),
    fileFilter: function (request, file, callback) {
        const filetypes = /jpg|jpeg|png|gif/
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
        const mimetype = filetypes.test(file.mimetype)
        if (mimetype && extname) {
            return callback(null, true)
        } else {
            return callback('Only images are allowed!', false)
        }
    },
    limits: {
        fileSize: 4 * 1024 * 1024,
    },
})

module.exports = upload