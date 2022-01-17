const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

const employee = require("./lib/class_employee");
const engineer = require("./lib/class_engineer");
const intern = require("./lib/class_intern");
const manager = require("./lib/class_manager");

let role = document.getElementById("roles").value;
console.log(role);

//array to hold all employees
employees = [];

function init () {

    function generateTeam () {
        inquirer.prompt([{
            type: "list",
            message: "What is this team member's role?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Employee", "Intern", "I'm done adding team members."]
        }])
        .then(function (userInput) {
            switch (userInput.addEmployee) {
                case "Manager": addManager();
                break;
                case "Engineer": addEngineer();
                break;
                case "Employee": addEmployee();
                break;
                case "Intern": addIntern();
                break;
            }
        })
    }

    function addManager () {
        inquirer.prompt
    }
}