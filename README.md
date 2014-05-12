## Synopsis
 
A CRUD App using the $HTTP service with verbs post, get, put and delete
- Built with NodeJS, ExpressJS, AngularJS and MongoDB

Using Mongoose to connect with the MongoDB

Node/Express provides the RESTful API that connects to Mongo DB. 

Angular accesses the RESTful api via $http

The program is mainly based on a Node Todo Tutorial on [scotch.io](http://scotch.io/tutorials/javascript/creating-a-single-page-todo-app-with-node-and-angular). The tutorials on [scotch.io](http://scotch.io) are quite good.


A gulp gulpfile.js is configured with various tasks that can filter, concatenate, minify and watch different file types e.g. JS, CSS, HTML. 


# Requirements

* Node
* MongoDB running 


## Installation

* Clone the Repository
* npm install - install all the node packages listed in the package.json file 
* bower install - installs the front end packages listed in the bower.json file
* Turn on MongoDB
* Open ../server/config/database.js and enter Mongo database details
* node server.js - start up Node\Express server
* Browse to http://localhost:3080


## Motivation
 
On my journey learning Node and AngularJS.
Technologies used: Node, Express 4.1, Angular, Mongoose, MongoDB, Robomongo client, REST API, Gulp, Bower,
$http service to make AJAX (Asynchronous JavaScript and XML) requests in AngularJS.


Michael Cullen
2014
