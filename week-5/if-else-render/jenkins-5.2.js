/*============================================; 
Title: Assignment 5.2; 
Author: Professor Krasso ; 
Date: 4 September 2020; 
Modified By: Douglas Jenkins; 
Description: EJS Templates
;===========================================*/

console.log("Douglas", "Jenkins", "Exercise 5.2");
console.log ('\n');

//require 
var express = require('express');
var path = require('path');
var http = require('http');

// app functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// set of names in an array
var people = [
'Dave',
'Bob',
'Mike',
'Jacob'
];

//routes
app.get('/', function(request,response){
    response.render('index', {
       names: people 
    });

});

// creates server
http.createServer(app).listen(8005, function(){
    console.log('Application started on port 8000');
});
