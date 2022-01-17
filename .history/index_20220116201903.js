const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

const employee = require("./lib/class_employee");
const engineer = require("./lib/class_engineer");
const intern = require("./lib/class_intern");
const manager = require("./lib/class_manager");

//array to hold all employees
let employees = [];

function managerNumber() {
    if ()
}