var express = require('express');
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");
var passport = require("../config/passport");
var moment = require('moment');


/* GET home page. */
router.get('/', function(req, res) {
	res.render('landing', { title: 'Login' });
});

router.get('/forms', function(req, res) {
  	res.render('forms', { title: 'forms' });
});

router.get('/signup', function(req, res) {
  	res.render('signup', { title: 'signup' });
});


// If authenticated, dashboard will be rendered

router.get('/dashboard', isAuthenticated, function(req, res) {
		var x = JSON.stringify(req.user);
		var y = moment(req.user.createdAt);
		var t = moment(y).format('ll');
	    res.render('dashboard', { email: req.user.email, date: t});
	    console.log('ACCESS GRANTED FOR '+x);

});


module.exports = router;
