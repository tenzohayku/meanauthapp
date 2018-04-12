const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// server settings
const app = express();

const users = require('./routes/users');

//Port Number
const port = 3000;

// CORS middleware
app.use(cors());

//Set static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser middleware
app.use(bodyParser.json());

app.use('/users', users);

//Start Server
app.get('/', (req, res)=> {
  res.send('Home page');
});





app.listen(port,() =>{
  console.log('Server started on port 3000');
});
