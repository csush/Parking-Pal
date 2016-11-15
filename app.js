
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var search = require('./routes/search');			// Added by Sushant
var help = require('./routes/help');				// Added by Sushant
var login = require('./routes/login');		// Added by Sushant
var sign_up = require('./routes/sign_up');
var results = require('./routes/results');			// Added by Oliver
var payment = require('./routes/payment');			// Added by Oliver
var host_form = require('./routes/host_form');
var payment_success = require('./routes/payment_success');
var host_entry = require('./routes/host_entry');
var add = require('./routes/add');
var check_user = require('./routes/check_user');
var search2 = require('./routes/search2');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/index', index.view);
app.get('/search', search.view);			// Added by Sushant
app.get('/help', help.view);				// Added by Sushant
app.get('/login', login.view);
app.get('/sign_up', sign_up.view);
app.get('/results', results.view);
app.get('/payment', payment.view);
app.get('/payment_success', payment_success.view);
app.get('/host_form', host_form.view);
app.get('/host_entry', host_entry.view);
app.get('/search/data', search.projectInfo);
app.get('/add', add.addSpot);
app.get('/check_user', check_user.check);
app.get('/search2', search2.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
