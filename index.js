// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide any installation instructions here."
    },
    {
        type: "input",
        name: "usage",
        message: "How would someone benefit from using this project?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?",
    },
    {
        type: "input",
        name: "tests",
        message: "How do you test this application?",
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project use?",
        choices: ["Apache License 2.0", "ISC", "MIT", "Mozilla Public License 2.0"],
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('README.md file successfully created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            console.log(answers);
        var fileName = generateMarkdown(answers);
        writeToFile(fileName, answers)
        });
};

// Function call to initialize app
init(); 
