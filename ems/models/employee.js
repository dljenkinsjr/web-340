/*============================================; 
Title: Assignment 7.4; 
Author: Professor Krasso ; 
Date: 18 September 2020; 
Modified By: Douglas Jenkins; 
Description: Using Mongoose DB to build employee schema
;===========================================*/

//console.log("Douglas", "Jenkins", "Exercise 7.4");
//console.log ('\n');

//required statements

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the Schema

let employeeSchema = new Schema ({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});

//expose the employee to calling files
var Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
