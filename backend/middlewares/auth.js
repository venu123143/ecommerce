const jwt = require('jsonwebtoken');
const User = require('../models/User');
const FancyError = require('../utils/FancyError');
const error = require('./Error')

const Authenticate = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            const err = new FancyError("Please Login to continue", 401)
            return error(err, req, res)
        }
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        const rootUser = await User.findOne({ _id: verifyToken._id });
        if (!rootUser) {
            const err = new FancyError("user not found", 401)
            return error(err, req, res)
        }
        req.token = token;
        req.user = rootUser;
        req.userId = rootUser._id;
        next();
    } catch (error) {
        const err = new FancyError("Unauthorized: login is needed", 401)
        return error(err, req, res)
    }
}
module.exports = Authenticate;
