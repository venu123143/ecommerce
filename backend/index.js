const express = require('express')
const app = express()
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const error = require('./middlewares/Error')


// config and database connection
require('dotenv').config();
require('./db/conn')
// cors, json and cookie parser
const corsOptions = {
    origin: ['http://localhost:3000'],
    // origin: '*',
    credentials: true,
    withCredentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use('/', express.static('uploads'));


// database and routers
app.use(require('./routes/UserRoute'))

// Handle uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting downt the server for handling uncaught Exception`);
})

// port
const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
})

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandle promise rejection`);
    server.close(() => {
        process.exit(1)
    })

})
