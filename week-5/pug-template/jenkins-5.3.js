/*============================================; 
Title: Assignment 5.3; 
Author: Professor Krasso ; 
Date: 4 September 2020; 
Modified By: Douglas Jenkins; 
Description: Using Pug
;===========================================*/

console.log("Douglas", "Jenkins", "Exercise 5.3");
console.log ('\n');

// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

var app = express();
app.set('views', path.resolve( __dirname, 'views'));
app.set('view engine', 'pug');

//route to the pug file
app.get('/', function(request, response){
    response.render('index', {
        message: 'Douglas Jenkins - Web 340'
    });

});

// create server
http.createServer(app).listen(8000, function(){
    console.log('Application has started on port 8000')
});