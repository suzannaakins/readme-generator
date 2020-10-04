const inquirer = require('inquirer');
// const generateReadMe = require('./(PATH TO README.MD)');

const generateMarkdown = require("./utils/generateMarkdown");


const promptUser = () => {
    return inquirer.prompt(questions)
};


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project - what motivated you to create it, how you developed it, and any challenges.(Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Babel', '.NET Core', 'Rails', 'Ansible', 'Bash', 'GIMP', 'None'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be used to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What does the user need to know about using the repo?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    //(data from the prompts, pass it into the generateMarkdown function in that file, then )
    //return fs.writefile....readme....error
}

// function to initialize program
function init() {
    promptUser();
    .then(writeToFile)
}

// function call to initialize program
init();
