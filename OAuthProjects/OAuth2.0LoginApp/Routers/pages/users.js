var express = require('express');

var router = express.Router();

router.get('/login',(req,res)=>{
    console.log('login**********');
    res.render('login');
})

router.get('/register',(req,res)=>{
    console.log('register ********');
    res.render('register');
})


router.post('/register',(req,res)=>{
    console.log(' post register ********');
    
    var name=req.body.name;
    var email=req.body.email;
    var username=req.body.username;
    var password=req.body.password;
    var password2=req.body.password2;

    //validations
    req.checkBody('name','Name is required').notEmpty();
    if(errors){
        console.log('yes');
    }else{
        console.log('no');
    }
})

module.exports = router;