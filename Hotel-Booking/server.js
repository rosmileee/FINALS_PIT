const express = require("express");

const app = express();

const dbconfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')


app.use('/api/rooms' , roomsRoute)

const port = process.env.PORT || 5000;


app.listen(port, ()=> console.log('Node Server Started using  nodemon'));