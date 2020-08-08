/*============================================; 
Title: Assignment 1.5; 
Author: Professor Krasso ; 
Date: 8 August 2020; 
Modified By: Douglas Jenkins; 
Description: Using a function to write onto a browser 
;===========================================*/

// http is being called using the require
var http = require("http");

function processRequest(req, res) {

// code will be posted to the body section of the page
  var body = "Douglas Jenkins Assignment 1.5";

      var contentLength = body.length;

      res.writeHead(200, {

          'Content-Length': contentLength,

          'Content-Type': 'text/plain'

      });

      res.end(body);

  }

  // calls the local server in order for it to be running
  var s = http.createServer(processRequest);

  s.listen(8080);
