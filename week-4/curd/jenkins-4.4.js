/*============================================; 
Title: Assignment 4.4; 
Author: Professor Krasso ; 
Date: 29 August 2020; 
Modified By: Douglas Jenkins; 
Description: Using curl for GET, PUT, POST and DELETE
;===========================================*/

console.log("Douglas", "Jenkins", "Exercise 4.4");
console.log ('\n');

var express = require("express");

var http = require("http");


var app = express();

// Outputs a  GET Response
app.get("/", function(request, response) {

  response.send("Hey this is a GET request.");
});

// Outputs a PUT response
app.put("/", function(request, response) {

  response.send("Hey this is a PUT request.");
});

// Outputs the post response
app.post("/", function(request, response) {

  response.send("Hey this is a POST request.");
});

// Outputs a delete response
app.delete("/", function(request, response) {

  response.send("Hey this is a DELETE request.");
});


http.createServer(app).listen(8000, function() {
  console.log("Application started on port 8000!");
});