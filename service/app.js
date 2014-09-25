
var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/jiantuo");
var accountAdpt = require("./models/AccountAdapter.js").create(connection);
var hrAdpt      = require("./models/HRAdapter.js").create(connection);
var projectAdpt = require("./models/PMAdapter.js").create(connection);
var crmAdpt     = require("./models/CRMAdapter").create(connection);

var express = require('express');
var routes = require('./routes');

var hrRoutes = require("./routes/hr");
var pmRoutes = require("./routes/pm");
var accountRoutes = require("./routes/account");
var crmRoutes = require("./routes/crm");

var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

app.accountAdpt = accountAdpt;
app.hrAdpt = hrAdpt;
app.projectAdpt = projectAdpt;
app.crmAdpt = crmAdpt;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

routes(app);
pmRoutes(app);
hrRoutes(app);
accountRoutes(app);
crmRoutes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
