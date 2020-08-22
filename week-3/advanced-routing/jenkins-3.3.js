/*============================================; 
Title: Assignment 3.3; 
Author: Professor Krasso ; 
Date: 22 August 2020; 
Modified By: Douglas Jenkins; 
Description: Advanced Routing
;===========================================*/

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

// grabs the parameter and calls the productID after you input a num value

app.get('/:productId', function(req,res){

    var productId = parseInt(req.params.productId, 10);

    res.render('index.ejs', {

        productId: productId

    });

});

//creates a server to display the ejs file 

http.createServer(app).listen(3001, function(){

    console.log('Application started and listening on port %s', 3001);

});
