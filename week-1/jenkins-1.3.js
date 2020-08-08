/*============================================; 
Title: Assignment 1.3; 
Author: Professor Krasso ; 
Date: 8 August 2020; 
Modified By: Douglas Jenkins; 
Description: Using modules in JavaScript
;===========================================*/

var url = require('url');

// calls a url and will be posted later
var parsedURL = url.parse("https://www.assignment-1.3.com/profile?lastname=jenkins");

// Will post https:
console.log(parsedURL.protocol);
// Will post name of website
console.log(parsedURL.host);
// Will post query value and display it on the web browser
console.log(parsedURL.query);