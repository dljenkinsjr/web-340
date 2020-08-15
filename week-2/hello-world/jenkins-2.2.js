/*============================================; 
Title: Assignment 2.2; 
Author: Professor Krasso ; 
Date: 15 August 2020; 
Modified By: Douglas Jenkins; 
Description: using a local server to display a message
;===========================================*/

// Calls for http and express
var express = require('express');
var http = require('http');


var app = express();

// creates a function that will post hello world onto the web browser
app.use(function(req, res){

    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})

// calls the server 8080
http.createServer(app).listen(8080, function(){
 
    console.log('Application started on port %s', 8080)

});