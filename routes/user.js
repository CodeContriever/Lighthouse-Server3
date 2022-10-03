// Importing modules 
const express = require('express'); 
const { signup, login, signout } = require('../controllers/user');
const { check } = require('express-validator')
const router = express.Router(); 

// Importing User Schema 
const User = require('../models/user'); 

// User signup api 
router.post('/signup', [
    check("name", "Name should be at least 3 characters").isLength({min: 3}),
    check("email", "Email should be validated").isEmail(),
    check("password", "Password should be at least 6 characters").isLength({min: 6})
], signup)



// User login api 
router.post('/login', login)

// User signout/logout
router.get("/signout", signout)


// Export module to allow it to be imported in other files 
module.exports = router; 