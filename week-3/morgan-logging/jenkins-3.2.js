/*============================================; 
Title: Assignment 3.2; 
Author: Professor Krasso ; 
Date: 22 August 2020; 
Modified By: Douglas Jenkins; 
Description: Morgan Logging
;===========================================*/
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

// tells express to use the ejs folder
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

//  will post the message on the ejs index
app.get('/', function(request, response){

    response.render('index',{

        message: 'Week 3 - Douglas Jenkins'

    });

});

// creates the server to display the ejs file


http.createServer(app).listen(3000, function(){

    console.log('Application started and listening on port %s', 3000);

});

