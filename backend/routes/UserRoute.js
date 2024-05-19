const express = require('express')
const router = express.Router();
const upload = require('../multer')
const User = require('../models/User');
const FancyError = require('../utils/FancyError');
const error = require('../middlewares/Error')
const fs = require('fs');
const sendMail = require('../utils/SendEmail');
const jwt = require('jsonwebtoken')
const sendToken = require('../utils/jwtToken')
const bcrypt = require('bcrypt');
const Authenticate = require('../middlewares/auth');

router.post('/create-user', upload.single('file'), async (req, res) => {
    const { name, email, password } = req.body
    if (!email || !name || !password) {
        // const err = { statusCode: 400, message: "fill all the fields" }
        const err = new FancyError("All fields cannot be empty", 400)
        return error(err, req, res)
    }
    if (req.file === undefined) {
        const err = new FancyError("Must need an image :)", 400)
        return error(err, req, res)
    }
    const userEmail = await User.findOne({ email });
    if (userEmail) {
        const fileName = req.file?.filename;
        const filePath = `uploads/${fileName}`
        fs.unlink(filePath, (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: "Error while deleting image" })
            }
        })
        const err = new FancyError("user already exists", 400)
        return error(err, req, res)
    }
    // const fileName = req.file.filename.split(' ')[0]
    const path = req.file.path;
    console.log(path);
    // const imageUrl = `http://localhost:5000/${path}`

    const user = new User({ name, email, password, avatar: path })
    const activationToken = createActivationToken(user)
    const activationUrl = `${process.env.ACTIVATION_URL}/${activationToken}`;
    try {
        await sendMail({
            email: user.email,
            subject: "Activate your account",
            message: `Hello ${user.name}, please click on the link to activate your account ${activationUrl}`,
        })
        return res.status(201).json({ statusCode: 200, sucesss: true, message: `please check your email:- ${user.email} to activate your account` })

    } catch (er) {
        const err = new FancyError("No Email with this address", 404)
        return error(err, req, res)
    }
})

// create activation token
const createActivationToken = (user) => {
    return jwt.sign({ user: user }, process.env.ACTIVATION_SECRET, {
        expiresIn: '5m',
    })
}
// activate user
router.post('/activation', async (req, res) => {
    try {
        const { activation_token } = req.body;
        const newUser = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);
        if (!newUser) {
            const err = new FancyError("invalid token", 400)
            return error(err, req, res);
        }
        const { name, email, password, avatar } = newUser.user;
        const userEmail = await User.findOne({ email });
        if (!userEmail) {
            const user = await User.create({ name, email, avatar, password })
            user.save();
            return res.json({ statusCode: 200, message: 'user created sucessfully' })
        }
        const err = new FancyError("user already exists", 400)
        return error(err, req, res)
        // sendToken(user, 201, res)
        
    } catch (er) {
        const err = new FancyError(er.message, 500)
        return error(err, req, res)
    }
})

router.post('/login-user', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            const err = new FancyError("please provide all the fields", 400)
            return error(err, req, res)
        }
        const user = await User.findOne({ email }).select('+password')
        if (!user) {
            const err = new FancyError("user doesn't exist", 400)
            return error(err, req, res)
        }
        const validatePassword = await bcrypt.compare(password, user.password)
        if (!validatePassword) {
            const err = new FancyError("Please provide valid password", 400)
            return error(err, req, res)
        }
        sendToken(user, 201, res)
    } catch (er) {
        const err = new FancyError(er.message, 400)
        return error(err, req, res)
    }
})

// get User
router.get('/getuser', Authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        if (!user) {
            const err = new FancyError("user doesn't exist", 400)
            return error(err, req, res)
        }
        return res.status(200).json({ statusCode: 200, sucesss: true, user, message: 'user logged In sucessfully :)' })
    } catch (er) {
        console.log(er.message);
        const err = new FancyError(er.message, 500)
        return error(err, req, res)
    }
})


router.get('*', (req, res, next) => {
    const err = new Error(`cannot find ${req.originalUrl} on the server!`);
    err.statusCode = 404;
    next(err)
})

module.exports = router