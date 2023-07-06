const { constants } = require('./Constants')


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal Server Error"
    
    switch (err.statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                statckTrace: err.stack,
                statusCode: err.statusCode
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found Error",
                message: err.message,
                statckTrace: err.stack,
                statusCode: err.statusCode
            })
            break;
        case constants.UNAUTHORIZED_ERROR:
            res.json({
                title: "UNAUTHORIZED_ERROR",
                message: err.message,
                statckTrace: err.stack,
                statusCode: err.statusCode
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                message: err.message,
                statckTrace: err.stack,
                statusCode: err.statusCode
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "SERVER_ERROR",
                message: err.message,
                statckTrace: err.stack,
                statusCode: err.statusCode
            })
            break;

        default:
            console.log("no error or unknown error.")
            break;
    }

    // // wrong mongodb id error
    // if (err.name === "CastError") {
    //     const message = `Resources not found with thid id. Invalid ${err.path}`;
    // }
    // // Duplicate key error
    // if (err.code === 11000) {
    //     const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
    // }
    // // wrong jwt error
    // if (err.name === 'JsonWebTokenError') {
    //     const message = `Your url is invalid please try again later`;
    // }
    // // jwt expired
    // if (err.name === "TokenExpiredError") {
    //     const message = 'Your Url is expired please try agin later';

    // }

}



