/*============================================; 
Title: Assignment 6.3; 
Author: Professor Krasso ; 
Date: 12 September 2020; 
Modified By: Douglas Jenkins; 
Description: Using Mongoose
;===========================================*/

console.log("Douglas", "Jenkins", "Exercise 6.3");
console.log ('\n');

// creates requires
var mongoose = require("mongoose");
var http = require("http");
var logger = require("morgan");
var express = require("express");

//inputs the information for MongoDB
var mongoDB = "mongodb+srv://admin:Shameca22@buwebdev-cluster-1.s2m0w.mongodb.net/test";

mongoose.connect(mongoDB, {

    useMongoClient: true   
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error:"));

db.once("open", function(){

    console.log("Application connected to mLab MongoDB instance");
    
});

//runs morgan
var app = express();
app.use(logger("dev"));

// creates server
http.createServer(app).listen(5000, function(){
    console.log('Application started and listening on port 5000');
});