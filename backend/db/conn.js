const mongoose = require('mongoose')
// const db = process.env.DATABASE

const db = 'mongodb://127.0.0.1:27017/ecommerce'
mongoose.connect(db).then(() => {
    console.log("connection successful")
}).catch((err) => { console.log(err, "not connected"); })

