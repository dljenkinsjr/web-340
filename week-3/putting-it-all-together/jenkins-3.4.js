/*============================================; 
Title: Assignment 3.4; 
Author: Professor Krasso ; 
Date: 22 August 2020; 
Modified By: Douglas Jenkins; 
Description: Putting it all together 
;===========================================*/

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('short'));



// creates the message for the home page
app.get('/', function(request, response){

    response.render('index', {
        message: 'home page'

    });
});

// creates the message for the about page
app.get('/about', function(request, response){

    response.render('about', {
        message: 'about page'

    });
});

// creates the message for the contact page
app.get('/contact', function(request, response){

    response.render('contact', {
        message: 'contact page'

    });
});

// creates the message for the products page
app.get('/products', function(request, response){

    response.render('products', {
        message: 'products page'

    });
});

// will create a local server
http.createServer(app).listen(8080, function(){

    console.log('Application started on port %s', 8080);

});