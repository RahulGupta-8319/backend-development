const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const wel = require("../logger/logger")
const allInfo = require("../until/helper")
const third = require("../validator/formatter")

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    wel.kuchhbhi()
    
    allInfo.pt()
    allInfo.pm()
    allInfo.gbi()
    third.tm()
    third.lower()
    third.upper()
    res.send('My second ever api!')

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason