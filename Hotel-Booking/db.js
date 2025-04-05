const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://rosmillago:rosmil060904@cluster0.jymsu.mongodb.net/mern-rooms';

mongoose.connect(mongoURL); // Clean connection

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('Mongo DB Connection failed');
});

connection.on('connected', () => {
  console.log('Mongo DB Connection Successful');
});
