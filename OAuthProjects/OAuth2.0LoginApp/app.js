var express = require('express');
var router = require('./Routers/api/users');
var usersRouter = require('./Routers/pages/users');
var homeRouter = require('./Routers/pages/home');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');
var path = require('path');
// Initialize the express app
var app =  express();

//set view engine
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'layout'}));
app.set('view engine','handlebars');

//Setup Moongoose DB connection
mongoose.connect('mongodb://localhost/usersDB');

// Initialise bodyparser middle ware.. this should be initialise before router as this should be availble in router
app.use(bodyParser.json());

//set static folder
app.use(express.static(path.join(__dirname,'public')));

// Initialize the router
app.use('/',homeRouter)
app.use('/users',usersRouter)
app.use('/api',router);


// db error handling middleware
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(400).send({"error":err.message});
});


// Listening on port 2000
app.listen(2000,()=>{
    console.log("express app listening on port 2000");
});


