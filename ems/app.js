/*============================================; 
Title: Assignment 6.4; 
Author: Professor Krasso ; 
Date: 12 September 2020; 
Modified By: Douglas Jenkins; 
Description: Building a site using ejs
;===========================================*/

console.log("Douglas", "Jenkins", "Exercise 6.4");
console.log ('\n');

// require statements
var express = require('express');
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
// calls for the styles
app.use("/styles",express.static(__dirname + "/styles"));
// calls for the images file
app.use("/images",express.static(__dirname + "/images"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/index", function (request, response){
    response.render("index", {
        title: "Welcome to Home Page",
        message: "Welcome!!!"
    });
});

// creates for the list page

app.get("/list", function (request, response){
    response.render("list", {
        title: "Welcome to List Page",
        message: "Employee Records"
    });
});

// creates for the data page

app.get("/new", function (request, response){
    response.render("new", {
        title: "Welcome to Data Entry Page",
        message: "Enter your Data Below"
    });
});

// creates for the view page

app.get("/view", function (request, response){
    response.render("view", {
        title: "Welcome to View Page",
        message: "Our Team"
    });
});



http.createServer(app).listen(8080, function() {

    console.log("Application has started on port 8080!");

});