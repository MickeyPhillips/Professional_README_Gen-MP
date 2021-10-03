// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/READ.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    console.log("Loading Prompt...");
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gitUser',
            message: 'Enter Github Username (REQUIRED): ',
            validate: gitNameInput => {
                if (gitNameInput) {
                    return true;
                }
                else {
                    console.log("Enter Github Username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter a Email (REQUIRED): ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Enter a Email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter Project Title (REQUIRED): ',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log("Enter Project Title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'README Description (REQUIRED): ',
            validate: descInput => {
                if (descInput) {
                    return true;
                }
                else {
                    console.log("Enter a Description!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'TableOfContent',
            message: 'If your README is very long, add a table of contents\nto make it easy for users to find what they need.\nWould you like to add a Table Of Contents?',
            default: false
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.\nInclude screenshots as needed.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log("Provide instructions and examples for use!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confCont',
            message: 'Would you like to add contributing guidelines?',
            default: false
        },
        {
            type: 'confirm',
            name: 'ownOrCov',
            message: "Would you like to write your own guidelines?\n(If not 'The Contributor Covenant' guidelines will be added)",
            when: ({ confCont }) => {
                if (confCont) {
                    return true;
                }
                else {
                    return false;
                }
            },
            default: false
        },
        {
            type: 'input',
            name: 'contGuidelines',
            message: 'Write your own contributing guidelines.',
            when: ({ ownOrCov }) => {
                if(ownOrCov) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confTests',
            message: 'Do you want to write tests for your application\nand provide examples of how to run them?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Add your test and examples: ',
            when: ({ confTests }) => {
                if(confTests) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }


    ])
};

// Function call to initialize app
init();


