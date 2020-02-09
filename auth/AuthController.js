const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const config = require("../config");
const User = require("../user/user");

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

//route for registering
router.post('/register', (req, res) =>{
    const hashedPassword = bcrypt.hashSync(req.body.password,8) //here 8 means 8 bit encoding

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }, (err, user) =>{
        if(err) return res.status(500).send('Problem while registering');
        res.send('Registration successful');
    })
});

//route to fetch all the users

module.exports = router;