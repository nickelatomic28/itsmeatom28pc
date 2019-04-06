var express = require('express');

var router = express.Router();

router.get('/',(req,res)=>{
    console.log('home****');
    res.render('home');
})

module.exports = router;