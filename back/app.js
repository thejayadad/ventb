const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const cors = require('cors');
const authController = require('./controllers/authController');
const boardController = require("./controllers/boardController")
const app = express();


const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})

//ROUTES
app.use("/auth", authController);
app.use('/board', boardController)


app.listen(5000, () => {
    console.log("App Listening")
})