const multer = require('multer')

const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSufix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extensition = file.originalname?.split('.')?.reverse()[0]
        const originalname = file.originalname.split('.')[0]
        console.log(extensition, originalname);
        cb(null, `${uniqueSufix}--avatar-${originalname}.${extensition}`)
    }
})


const upload = multer({ storage: Storage })
module.exports = upload