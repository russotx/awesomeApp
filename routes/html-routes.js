var express = require('express');
var router = express.Router();
// var isAuthenticated = require("../config/middleware/isAuthenticated");

/* GET home page. */
router.get('/', function(req, res, next) {
	// If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/dashboard");
    }
  res.render('landing', { title: 'Login' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

// If authenticated, dashboard will be rendered
 router.get('/dashboard', function(req, res) {  //took out isAuthenticated for now
  res.render('dashboard', { title: 'Dashboard'})
 });

 // define the about route
router.get('/flot', function (req, res) {
  res.send('');
});




module.exports = router;
