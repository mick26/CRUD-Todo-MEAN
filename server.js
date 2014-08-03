/*=========================================================
Michael Cullen
Todo CRUD - Express 4 / Mongoose / Angular
server.js

2014
Working - (Tá se ag obair)
============================================================*/

/* ========================================================== 
External Modules/Packages Required
============================================================ */
var express  = require('express');						//Express v4.x
var bodyParser = require('body-parser');				//middleware to read Http packet content using req.body etc
var http = require('http');
var colours = require('colors');
var logger   = require('morgan');						//logger middleware

/* ========================================================== 
Internal App Modules/Packages Required
============================================================ */
var routes = require('./server/routes.js');				//Exchange routes


/* ========================================================== 
Create a new application with Express
============================================================ */
var app = express(); 		


/* ========================================================== 
Set the Port
============================================================ */
app.set('port', process.env.PORT || 8800);

/* ========================================================== 
Serve the static index.html from the public folder
============================================================ */
app.use(express.static(__dirname + '/public')); 


/* ========================================================== 
Use Middleware
============================================================ */
app.use(logger('dev')); 	//log every request in dev mode only to the console
app.use(bodyParser()); 		//Get info from $HTTP POST/PUT packets - needed for req.body
							//bodyParser includes JSON & Urlencoded

/* ========================================================== 
ROUTES - using Express
============================================================ */
routes(app);

/* ========================================================== 
Create HTTP Server using Express
============================================================ */
var server = http.createServer(app);

/* ========================================================== 
Bind to a port and listen for connections on it 
============================================================ */
server.listen(app.get('port'), function() {
  console.log('Express HTTP server listening on port ' .red + app.get('port')  ) ;
});

