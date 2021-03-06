// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown.js');

// TODO: create input function
function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter in your email',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter in your project description',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your project description.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select the license(s) that apply.',
            choices: ['MIT','ISC','IBM']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter in your projects installation instructions',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter your project usage information',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your usage information');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Enter your contribution guidelines',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your contribution guidelines');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Enter your project test instructions',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your test instructions');
                    return false;
                }
            }
        },
    ]);
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then(function(res){
        generateMarkdown(res);
    });
}

// Function call to initialize app
init();
