/*============================================; 
Title: Assignment 9.3; 
Author: Professor Krasso ; 
Date: 1 October 2020; 
Modified By: Douglas Jenkins; 
Description: Building a site using ejs
;===========================================*/

console.log("Douglas", "Jenkins", "Exercise 8.4");
console.log ('\n');

// require statements
var express = require('express');
var http = require("http");
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require('./models/employee');


// setup csrf protection
var csrfProtection = csrf({cookie:true});

// express application 
var app = express();

//mLab connection
var mongoDB = "mongodb+srv://admin:Shameca22@buwebdev-cluster-1.s2m0w.mongodb.net/test";

mongoose.connect(mongoDB, {
    useMongoClient: true   
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});


// app functions to call from folders
app.set("views", path.resolve(__dirname, "views"));
// calls for the styles
app.use("/styles",express.static(__dirname + "/styles"));
// calls for the images file
app.use("/images",express.static(__dirname + "/images"));

app.set("view engine", "ejs");

// use statements
app.use(logger("short"));
app.use(bodyParser.urlencoded({
    extended:true
}));

// cookie parser
app.use(helmet.xssFilter());
app.use(cookieParser());
app.use(csrfProtection);


// CSRF token
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});



app.get("/", function(request, response) {

    response.render("index", {
        title: "Welcome to Home Page",
        message: "XSS Prevention Example"

    });

});

// creates for the list page

app.get("/list", function(req,res){
    Employee.find({}, function(error, employees){
      if (error) throw error;
      res.render("list",{
        title: "Employee List",
        employees: employees
      });
    });
  });

// creates for the data page

app.get("/new", function (request, response){
    response.render("new", {
        title: "Welcome to Data Entry Page",
    });
});

// creates for the view page

app.get("/view/:queryName", function (request, response){
    var queryName = request.params.queryName;

    Employee.find({'firstName': queryName},
    function(error,employees){
       if (error) throw error;
       console.log(employees);
       if (employees.length>0){
           response.render("view",{
                title: "Employee Record",
                employee: employees
           })
       
        }
        else{ 
            response.redirect("/list")
        }
    });
});



// app post below

app.post("/process", function(req,res){
    console.log(req.body.txtName);
    if(!req.body.txtName){
      res.status(400).send("Entries must have a name");
      return;
    }
    // get the req. form data
    var employeeFirst = req.body.txtName;
    console.log(employeeFirst);

    var employeeLast = req.body.txtLast;
    console.log(employeeLast);

    //create employee model
    var employee = new Employee({
        firstName: employeeFirst,
        lastName: employeeLast
    });
    // save function that redirects
    employee.save(function(error){
      if (error) 
      throw error;
      console.log(employeeFirst + ' ' + employeeLast +" saved successfully!!")
    });
    res.redirect("/list");
  });

  

// creates the app to be displayed on port 8080
  app.set("port", process.env.PORT || 8080);
  http.createServer(app).listen(app.get("port"), 
  function() { 
      console.log("Application started on port " + app.get("port")) 
  });