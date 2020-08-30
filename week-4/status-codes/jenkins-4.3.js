/*============================================; 
Title: Assignment 4.3; 
Author: Professor Krasso ; 
Date: 29 August 2020; 
Modified By: Douglas Jenkins; 
Description: HTTP Status Codes
;===========================================*/

console.log("Douglas", "Jenkins", "Exercise 4.4");
console.log ('\n');

var express = require("express");

var http = require("http");

var app = express();

// a response is created from json that displays the message

app.get("/not-found", function(request, response) {

 response.status(404);

    response.json({

        error: "Can not be found."

    })

});

// a response is created from json that displays the message


app.get("/ok", function(request, response) {

 response.status(200);

    response.json({

        message: "Page has been loaded."

    })

});

// a response is created from json that displays the message


app.get("/not-implemented", function(request, response) {

 response.status(501);

    response.json({

        error: "Page not into effect."

    })

});

// creates the sever to display the information

http.createServer(app).listen(3000, function() {

   console.log("Application started on port 3000!");

});