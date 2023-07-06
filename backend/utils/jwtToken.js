
const sendToken = async (user, statuscode, res) => {
    const token = await user.generateAuthToken();
    const options = {
        maxAge: 360000,
        secure:false,
        httpOnly:true,
    }
    res.status(statuscode).cookie('token', token, options).json({
        sucess: true,
        statusCode:statuscode,
        message: "user logged in sucessfully"
    })
}
module.exports = sendToken;