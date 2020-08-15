/*============================================; 
Title: Assignment 2.4; 
Author: Professor Krasso ; 
Date: 15 August 2020; 
Modified By: Douglas Jenkins; 
Description: Using EJS and Express to display a message
;===========================================*/


// creates the requests
var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

// Tells express where to get ejs file from 
app.set('views', path.resolve(__dirname, 'views')); 


//Tell Express to use the EJS view engine
app.set('view engine', 'ejs');

// creates a message and a function to be posted on the EJS file
app.get('/', function(request, response){

    response.render('index.ejs', {

        firstName: 'John',

        lastName: 'Doe',

        address: '1234 Midway Lane, Santa Clarita, CA'
    });

});

// creates server for the web browser to be displayed

http.createServer(app).listen(8080, function(){

    console.log('EJS-Views app started on port 8080.');

});
