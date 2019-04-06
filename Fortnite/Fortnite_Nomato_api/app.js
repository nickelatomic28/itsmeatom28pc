var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var localityRoute = require('./src/routes/restaurantLocalityRoute');
mongoose.connect('mongodb://localhost:27017/nomato-api');
var app = express();

//bodyParser.json();
//bodyParser.urlencoded({extended:true});

 app.use('/api',localityRoute);


let port = process.env.port||3000;

app.listen(port,function(){
    console.log(`Server listening on port no : ${port}`);
})