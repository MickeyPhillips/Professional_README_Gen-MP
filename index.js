const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
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
        type: 'input',
        name: 'installation',
        message: 'Steps for installation: (REQUIRED): ',
        validate: installInput => {
            if (installInput) {
                return true;
            }
            else {
                console.log("Enter Installation steps!");
                return false;
            }
        }
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
        name: 'tableOfContents',
        message: 'If your README is very long, add a table of contents\nto make it easy for users to find what they need.\nWould you like to add a Table Of Contents?',
        default: false
    },
    {
        type: 'confirm',
        name: 'licenseConfirm',
        message: 'Do you want to add licenses?',
        default: false
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Add licenses ',
        choices: [
            {
                name: "Apache License 2.0",
                value: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            }, 
            {
                name: "Boost Software License 1.0",
                value: "[![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
            }, 
            {
                name: "GNU AGPLv3",
                value: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
            }, 
            {
                name: "GNU GPLv3",
                value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            }, 
            {
                name: "GNU LGPLv3",
                value: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
            }, 
            {
                name: "ISC License (ISC)",
                value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
            }, 
            {
                name: "MIT License",
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            }, 
            {  
                name: "Mozilla Public License 2.0",
                value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            }, 
            {
                name: "The Unlicense",
                value: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            },
            {
                name: "No license",
                value: "none"
            }],
        when: ({licenseConfirm}) => {
            if(licenseConfirm) {
                return true;
            }
            else {
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
        name: 'contributing',
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
    },
    {
        type: 'confirm',
        name: 'confirmContacts',
        message: 'Do you want to add contact information for questions? ',
        default: false
    },
    {
        type: 'input',
        name: 'github',
        message: 'Add Github username. ',
        when: ({ confirmContacts }) => {
            if(confirmContacts) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Add email. ',
        when: ({ confirmContacts }) => {
            if(confirmContacts) {
                return true;
            }
            else {
                return false;
            }
        }
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('README.md was created!')
            
            
    });
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => generateMarkdown(answers))
        .then(readME => {
            return writeToFile("./dist/README.md", readME);
        })
        .catch(err => {
            console.log(err);
        });
};

// Function call to initialize app
init();
