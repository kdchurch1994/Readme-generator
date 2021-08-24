// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
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
        message: "Please list all of the contributors for this project. (Required)",
        validate: inputContributor => {
            if (inputContributor) {
                return true;
            } else {
                console.log("Please enter the contributors to this project to continue.");
                return false;
            }
        }
    },
    {
        //Prompts the creator to provides instructions for any tests that they may have used when building their application. If no tests were created, the creator should enter that there are no tests. 
        type: "input",
        name: "tests",
        message: "Please provides instructions on running the tests you created when building the program. If no tests, enter 'There are no tests'. (Required)",
        validate: inputTests => {
            if (inputTests) {
                return true;
            } else {
                console.log("Please enter instructions for the tests you created to continue.");
                return false;
            }
        }
    }, 
    {
        //Prompts the creator to choose what licensing is being used with a "No License" option available for projects that have no license. 
        type: "list",
        name: "license",
        message: "From the options provided, select which license you used. Select the fourth option 'No License' if no license was used.",
        choices: ["Apache-2.0", "MIT", "MPL-2.0", "No License"],
    },
    {
        //Prompts the creator for their Github username. Validate is being used to ensure that they enter the github username. 
        type: "input",
        name: "github_user",
        message: "Please enter your Github username. (Required)",
        validate: inputgithubUser => {
            if (inputgithubUser) {
                return true;
            } else {
                console.log("Please enter your Github username to continue.");
                return false;
            }
        }
    },
    {
        //Prompts the creator to add their email info. Validate is being used to ensure that email information was entered. 
        type: "input",
        name: "email",
        message: "Please enter your email address. (Required)",
        validate: inputEmail => {
            if (inputEmail) {
                return true;
            } else {
                console.log("Please enter your email address to continue.");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {//asynchronously writes data to the file filename using data to store and generate the contents of the file. 
        if (err) { //if there is an error with writing the file, and error will be thrown; otherwise a README file will be created
            throw err;
        } else {
            console.log("Your README has been created.")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    //This will start the inquirer.prompt that will ask the creator the list of questions from the array questions.
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
