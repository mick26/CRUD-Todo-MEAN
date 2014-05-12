/*=========================================================
Michael Cullen
Todo CRUD - Express 4 / Mongoose / Angular
server.js

May 2014
Working - (Tá se ag obair)
============================================================*/


/* ========================================================== 
External Modules/Packages Required
============================================================ */
var express  = require('express');						//Express v4.1 Web server
var mongoose = require('mongoose'); 					//mongoose for mongodb
var logger   = require('morgan');						//logger middleware
var bodyParser = require('body-parser');				//middleware to read Http packet content using req.body etc

/* ========================================================== 
Internal App Modules/Packages Required
============================================================ */
var database = require('./server/config/database'); 	//database config - i.e. Local/remote MongoDB URL
var routes = require('./server/routes.js');				//Exchange routes & mongoose interaction with DB


/* ========================================================== 
Port the server will listen on
============================================================ */
var port = process.env.PORT || 3080; 

/* ========================================================== 
Create a new application with Express
============================================================ */
var app = express(); 		

/* ========================================================== 
Connect to mongoDB database - DB URL specified in database.js
============================================================ */
mongoose.connect(database.url); 	


/* ========================================================== 
serve the static index.html from the public folder
============================================================ */
app.use(express.static(__dirname + '/public')); 
//app.use(express.static(__dirname + '/build')); 


/* ========================================================== 
Use Middleware
============================================================ */
app.use(logger('dev')); 	//log every request to the console
app.use(bodyParser()); 		//Get info from $HTTP POST/PUT packets - needed for req.body


/* ========================================================== 
ROUTES - using Express
============================================================ */
routes(app);


/* ========================================================== 
Bind to a port and listen for connections on it 
============================================================ */
var server = app.listen(port, function() {
	console.log('Listening on port %d', server.address().port);
	console.log("========LISTENING=========")
});


