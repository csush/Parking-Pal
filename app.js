
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
var hostentry = require('./routes/host_entry');		// Added by Sushant
var hostsubmit = require('./routes/host_submit')	// Added by Sushant
var results = require('./routes/results');			// Added by Oliver
var payment = require('./routes/payment');			// Added by Oliver
var payment_success = require('./routes/payment_success');
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
app.get('/', index.view);
app.get('/search', search.view);			// Added by Sushant
app.get('/help', help.view);				// Added by Sushant
app.get('/host_entry', hostentry.view);		// Added by Sushant
app.get('/host_submit', hostsubmit.view);	// Added by Sushant
app.get('/results', results.view);
app.get('/payment', payment.view);
app.get('/payment_success', payment_success.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
