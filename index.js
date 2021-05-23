// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
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
        default: "npm install"
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
            'AGPLv3.0',
            'Apachev2.0',
            'BSLv1.0',
            'CC0v1.0',
            'EPLv2.0',
            'GPLv2.0',
            'GPLv3.0',
            'LGPLv2.1',
            'MIT',
            'MPLv2.0',
            'Unlicense'      
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
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter your email address.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter your email address.");
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`Generated-README.md`, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'README.md has been successfully created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions); 
}

// Function call to initialize app
init()
    .then(generateMarkdown)
    .then(writeToFile)
    .then(data => {
        if (data.ok) {
        console.log(data.message);
    } else {
        console.log('Your data was not processed correctly.');
    }
    })
    .catch(err => {
        console.log(err);
    });
