/*============================================; 
Title: Assignment 7.2; 
Author: Professor Krasso ; 
Date: 18 September 2020; 
Modified By: Douglas Jenkins; 
Description: TDD in Action
;===========================================*/

console.log("Douglas", "Jenkins", "Exercise 7.2");
console.log ('\n');

// creates require

var assert = require("assert");

// sends a message to npm test that will result in a pass or fail
describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});
