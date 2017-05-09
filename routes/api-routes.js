// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var express = require('express');
var router = express.Router();

 

  router.post("/api/login", passport.authenticate('local'), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  res.json('/dashboard');
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      res.json(err);
    });
  });

  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  router.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


module.exports = router;