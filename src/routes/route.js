const welcome = require("../logger")
const mydetails = require("..util/helper")
const format = require("../validator/Formatter")
const express = require('express');



const router = express.Router();

router.get('/test-me', function (req, res) {
    welcome.welcome11();
    mydetails.date();
    mydetails.month();
    mydetails.batchinfo();
    format.Trim("   functionup   ");
    format.lowerCase("functionup");
    format.upperCase("FuNctionUp");
    
    res.send('My first ever api!')
});

module.exports = router;