const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const  port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());


//MongoDB URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

//Connection to database
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Database connection established successfully');
});

//Model and Route Files
const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
});
