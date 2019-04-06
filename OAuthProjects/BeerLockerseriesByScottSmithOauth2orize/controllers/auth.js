var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/user');
var BearerStrategy = require('passport-http-bearer').Strategy
var Token = require('../models/token');
var Client = require('../models/client');

passport.use(new BasicStrategy(
  function(username, password, callback) {
    console.log("bearer");
    User.findOne({ username: username }, function (err, user) {
      if (err) { return callback(err); }

      // No user found with that username
      if (!user) { return callback(null, false); }

      // Make sure the password is correct
      user.verifyPassword(password, function(err, isMatch) {
        if (err) { return callback(err); }

        // Password did not match
        if (!isMatch) { return callback(null, false); }

        // Success
        return callback(null, user);
      });
    });
  }
));

passport.use('client-basic', new BasicStrategy(
  function(username, password, callback) {
    console.log("client-basic bearer"+username);
    console.log(username);
    console.log(password);
    Client.findOne({ id: username }, function (err, client) {
      console.log("err")
      if (err) {  console.log("err"); return callback(err); }

      console.log((!client || client.secret !== password));
      // No client found with that id or bad password
      if (!client || client.secret !== password) { console.log("client"); return callback(null, false); }
      console.log(callback);
      // Success
      return callback(null, client);
    });
  }
));

passport.use(new BearerStrategy(
  function(accessToken, callback) {
    console.log("basic bearer");
    console.log(accessToken);
    Token.findOne({value: accessToken }, function (err, token) {
      if (err) { return callback(err); }

      // No token found
      if (!token) { return callback(null, false); }

      User.findOne({ _id: token.userId }, function (err, user) {
        if (err) { return callback(err); }

        // No user found
        if (!user) { return callback(null, false); }

        // Simple example with no scope
        callback(null, user, { scope: '*' });
      });
    });
  }
));



//exports.isAuthenticated = passport.authenticate('basic', { session : false }); updated to below export 
exports.isBearerAuthenticated = passport.authenticate('bearer', { session: false });
exports.isAuthenticated = passport.authenticate(['basic', 'bearer'], { session : false });
exports.isClientAuthenticated = passport.authenticate('client-basic', { session : false });
