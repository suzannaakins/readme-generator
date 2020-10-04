const inquirer = require('inquirer');
const generateReadMe = require('../readme-template.md');

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
        name: 'installation',
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
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('../README.md', fileContent, err => {
                // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
                if (err) {
                    reject(err);
                    // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                    return;
                }
    
                // if everything went well, resolve the Promise and send the successful data to the `.then()` method
                resolve({
                    ok: true,
                    message: 'README.md created!'
                });
            });
        });
    };
    //(data from the prompts, pass it into the generateMarkdown function in that file, then )


// function to initialize program
function init() {
    promptUser()
    .then(writeToFile)
}

// function call to initialize program
init();
