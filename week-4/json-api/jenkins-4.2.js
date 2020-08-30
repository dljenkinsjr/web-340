/*============================================; 
Title: Assignment 4.2; 
Author: Professor Krasso ; 
Date: 29 August 2020; 
Modified By: Douglas Jenkins; 
Description: JSON APIs
;===========================================*/

console.log("Douglas", "Jenkins", "Exercise 4.4");
console.log ('\n');

var express = require("express");

var http = require("http");

var app = express();

// gets the id  and puts a reponse from json
app.get("/customer/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({

       carBrand: "Honda",

        carMake: "Civic 2020",

        carId: id

    });

});

// creates the server to display the information
http.createServer(app).listen(3000, function() {

    console.log("Application started on port 3000");

});