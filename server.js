// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user');
var Habit = require('./models/habit');
var bodyParser = require('body-parser');
var router = express.Router();

//adding passport stuff
var passport = require('passport');
var passportLocal = require('passport-local')
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

mongoose.connect('mongodb://habit:formers498@ds013221.mlab.com:13221/habit-formers');

// Create our Express application
var app = express();

// Use environment defined port or 4000
var port = process.env.PORT || 4000;

/*

//Allow CORS so that backend and frontend could pe put on different servers
var allowCrossDomain = function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
	next();
};
app.use(allowCrossDomain);

*/

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
	extended: true
}));

// this does something?
app.use(bodyParser.json());

// preflight stuffs from https://gist.github.com/cuppster/2344435
// app.use(express.methodOverride());

// ## CORS middleware
//
// see: http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

// intercept OPTIONS method
if ('OPTIONS' == req.method) {
	res.sendStatus(200);
}
else {
	next();
}
};
app.use(allowCrossDomain);
//User auth stuff will clean up later
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
// All our routes will start with /api
app.use('/api', router);

var homeRoute = router.route('/');
var usersRoute = router.route('/users');
var userRoute = router.route('/users/:id');
var habitsRoute = router.route('/habits');
var habitRoute = router.route('/habits/:id');
var login = router.route('/login');
homeRoute.get(function(req, res) {
	res.status(404).json({
		message : 'Nothing here. Go to ./users or ./habits to play with the API.',
		data : []
	});
});

app.listen(port);
console.log('Server running on port ' + port);
