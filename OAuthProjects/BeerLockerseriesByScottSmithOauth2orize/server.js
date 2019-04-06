// get the package we need
var express = require('express');
var mongoose = require('mongoose');
var beerController = require('./controllers/beer');
var userController = require('./controllers/user');
var bodyParser = require('body-parser');
var passport = require('passport');
var authController = require('./controllers/auth');
var clientController = require('./controllers/client');
var ejs = require('ejs');
var session = require('express-session');
var oauth2Controller = require('./controllers/oauth2');


// Create an Express application
var app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Connect to beerlocker mongoDB
mongoose.connect('mongodb://localhost/beerlockerOAuth');


// use the bodyparser middleware in our application
//app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({
     extended: true
   }));

// Use express session support since OAuth2orize requires it
app.use(session({
    secret: 'Super Secret Session Key',
    saveUninitialized: true,
    resave: true
  }));

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

// Create endpoint handlers for /clients
router.route('/clients')
  .post(authController.isAuthenticated, clientController.postClients)
  .get(authController.isAuthenticated, clientController.getClients);

// Create endpoint handlers for oauth2 authorize
router.route('/oauth2/authorize')
  .get(authController.isAuthenticated, oauth2Controller.authorization)
  .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
router.route('/oauth2/token')
  .post(authController.isClientAuthenticated, oauth2Controller.token);

// register all our routes with /api
app.use('/api',router);

// Use the environmental defined port or 3000
var port = process.env.port || 3000;

//Start the server
app.listen(port,()=>{
    console.log("Server listening on port :" + port);
});
