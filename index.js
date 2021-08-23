// TODO: Include packages needed for this application
const inquirer = require("inquirer");
//const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        //Prompts the user to enter the title of their programming project. It is required to be answered and is using validate to ensure that an actual project title was entered. 
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: inputTitle => {
            if (inputTitle) {
                return true;
            } else {
                console.log("Please enter a project title to continue.");
                return false;
            }
        }
    },
    {
        //Prompts the creator to enter a description of their project and uses a validator that will not allow the user to contine until they provide a description of thier project. 
        type: "input",
        name: "description",
        message: "Please provide a description of your project. (Required) ",
        validate: inputDescription => {
            if (inputDescription) {
                return true;
            } else {
                console.log("Please provide a project description to continue.")
                return false;
            }
        }
    },
    {
        //Prompts the creator to enter installation instructions so that a user can install the necessary packages to run this program on their own machine. It is required, and validate is being use to ensure that the user actually entered installation instructions
        type: "input",
        name: "installation_instructions",
        message: "Please provide instructions for installation. (Required)",
        validate: inputInstallation => {
            if (inputInstallation) {
                return true;
            } else {
                console.log("Please provide installation instructions to continue.");
                return false;
            }
        }
    },
    {
        //Prompts the creator to provide usage instructions so that the user knows how to use the particular site/project
        type: "input",
        name: "usage_instructions",
        message: "Please provide usage instructions to instruct the user on how to use the site. (Require)",
        validate: inputUsage => {
            if (inputUsage) {
                return true;
            } else {
                console.log("Please provide instructions on how to use your project to continue. ");
                return false;
            }
        }
    },
    {
        //Prompts the creator to add contributors to the project, including themselves. Validate is being used to ensure that the the creator adds a contributor to the project
        type: "input",
        name: "contributors",
        message: "Please list all of the contributors for this project.",
        validate: inputContributor => {
            if (inputContributor) {
                return true;
            } else {
                console.log("Please enter the contributors to this project to continue.");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
