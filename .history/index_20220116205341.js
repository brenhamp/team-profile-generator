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
        inquirer.prompt ([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?",
            },

            {
                type: "input",
                name: "managerID",
                message: "What is your manager's ID number?",
            },

            {
                type:"input",
                name:"managerEmail",
                message: "What is your manager's email address?",
            },

            {
                type: "input",
                name: "officeNumber",
                message: "What is your manager's office number?",
            }
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
            employees.push(manager);
            generateTeam();
        });
    };

    function addEngineer () {
        inquirer.prompt ([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
            },

            {
                type: "input",
                name: "engineerID",
                message: "What is your engineer's ID number?",
            },

            {
                type:"input",
                name:"engineerEmail",
                message: "What is your engineer's email address?",
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's GitHub username?",
            }
        ])
        .then(answers => {
            const engineer = new engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            employees.push(engineer);
            generateTeam();
        });
    }



}