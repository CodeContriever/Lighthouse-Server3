// Importing modules
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

// Initialize express app
const app = express();

// Import dotenv file
require('dotenv').config()
  
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to database !!');
    })
    .catch((err)=>{
      console.log('Connection failed !!'+ err.message);
    });

// Using bodyparser to parse json data
app.use(bodyparser.json());
  
// Importing routes
const user = require('./routes/user');

// Use user route when url matches /api/user/
app.use('/api/user', user);
  
// Creating server
const port = process.env.PORT || 3000;
    app.listen(port, () => 
    console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${port}`)
);