/*============================================; 
Title: Assignment 2.3; 
Author: Professor Krasso ; 
Date: 15 August 2020; 
Modified By: Douglas Jenkins; 
Description: creates multiple pages to be displayed on node
;===========================================*/


// creates request for http and express
var express = require('express');
var http = require('http');

var app = express();

// routes responds data to the user

app.get('/', function(req, res){

    res.end('Welcome to the homepage.\n');

});

app.get('/about', function(req, res){

    res.end('Welcome to the about page.\n');

});

app.get('/contact', function(req, res){

    res.end('Welcome to the contact page.\n');

});

// creates a request that will negate wrong inputted information

app.use(function(req, res){

    res.statusCode = 404;
    res.end('404!\n');

});

// creates a request for a local server under 3000

http.createServer(app).listen(3000, function(){

    console.log('Application started on port %s', 3000);

});




