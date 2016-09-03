
//****************************************************************
//           
//****************************************************************


// ***** DEPENDENCIES ************************
// Express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

var path = require('path');


// ********* DATABASE CONFIGURATION *********
var db = require('./models/db.js');

// ********* EXPRESS CONFIGURATION **********
// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ====================================================
// Serve static content for the app from the "public" directory in the application directory.
// express.static is express's (only) built-in middleware
// It is used to serve static files such as images and html, css and js files.
// The process.cwd method return the current working directory of the node.js process
app.use(express.static(process.cwd()));



var apiRoutes = require('./app/config/apiRoutes.js');
app.use('/', apiRoutes);

// listen on port 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('App running on port', PORT);
});







