const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required:true
    }

}, { collection: 'users' })

// hashing the password 
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next();
})

// we are generating token
userSchema.methods.generateAuthToken = async function () {
    try {
        let cur_token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        await this.save();
        return cur_token;
    } catch (error) {
        console.log(error);
    }
}
const User = mongoose.model("USER", userSchema);
module.exports = User;
