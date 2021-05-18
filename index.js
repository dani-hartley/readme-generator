// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter the project's title.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project:",
        validate: input => {
            if(input) {
                return true;
            } else {
                console.log("Please provide a description of your project");
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "list",
        name: "license",
        Message: "What kind of license should your project have?",
        choices: [
            'GNU Affero General Public License v3.0',
            'Apache License 2.0',
            'BSD 2-Clause',
            'BSD 3-Clause',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v2.1',
            'MIT License',
            'Mozilla Public License 2.0',
            'The Unlicense'        
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    // Question Section???
])};

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
