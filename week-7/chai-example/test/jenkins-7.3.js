/*============================================; 
Title: Assignment 7.3; 
Author: Professor Krasso ; 
Date: 18 September 2020; 
Modified By: Douglas Jenkins; 
Description: Using  Mocha and Chai
;===========================================*/

console.log("Douglas", "Jenkins", "Exercise 7.3");
console.log ('\n');

// creates require
var fruits = require("../jenkins-fruits");
var chai = require ("chai");
var assert = chai.assert;

// creates results that will be posted when tested
describe("fruits", function(){
    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
            assert(Array.isArray(f));

    });
});

