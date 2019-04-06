// get the package we need
var express = require('express');
var mongoose = require('mongoose');
var beerController = require('./controllers/beer');
var userController = require('./controllers/user');
var bodyParser = require('body-parser');
var passport = require('passport');
var authController = require('./controllers/auth');

// Create an Express application
var app = express();

// Connect to beerlocker mongoDB
mongoose.connect('mongodb://localhost/beerlocker');


// use the bodyparser middleware in our application
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

// Use the passport package in our application
app.use(passport.initialize());

var router = express.Router();

// create end point handler for /beers
router.route('/beers')
    .post(authController.isAuthenticated,beerController.postBeers)
    .get(authController.isAuthenticated,beerController.getBeers);

// create end point handler for /beers/:beer_id
router.route('/beers/:beer_id')
    .get(authController.isAuthenticated,beerController.getBeer)
    .put(authController.isAuthenticated,beerController.putBeer)
    .delete(authController.isAuthenticated,beerController.deleteBeer);

//create end point handler for /users
router.route('/users')
    .get(userController.getUsers)
    .post(userController.postUsers);

// create end point handler for /users/:userid
router.route('/users/:userid')
    .put(userController.putUser)
    .delete(userController.deleteUser);

// register all our routes with /api
app.use('/api',router);

// Use the environmental defined port or 3000
var port = process.env.port || 3000;

//Start the server
app.listen(port,()=>{
    console.log("Server listening on port :" + port);
});
