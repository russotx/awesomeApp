var express = require('express');
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");
var passport = require("../config/passport");



/* GET home page. */
router.get('/', function(req, res) {
	res.render('landing', { title: 'Login' });
});



router.get('/signup', function(req, res) {
  	res.render('signup', { title: 'signup' });
});


// If authenticated, dashboard will be rendered
router.get('/dashboard', isAuthenticated, function(req, res) {
		var x = JSON.stringify(req.user)
	    res.render('dashboard', { title: x});
	    console.log('ACCESS GRANTED FOR '+req.user.email);
 });


module.exports = router;
