const express = require('express');
//require("dotenv").config();
const dbConnect = require('./config/database.user')


const routeUser = require('./app/routes/user.route');
const routeBook=require('./app/routes/book.route');
const routeCart=require('./app/routes/cart.route');
const logger = require('./utils/logger');
require('dotenv').config();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,           
    optionSuccessStatus:200
}

const app = express();


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/users',cors(corsOptions), routeUser)
app.use('/books',cors(corsOptions), routeBook)
app.use('/carts',cors(corsOptions),routeCart)


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
    dbConnect();
    
});
module.exports = app;