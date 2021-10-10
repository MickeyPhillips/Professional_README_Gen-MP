// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == "none" || !data.license) {
    return '';
    
  }
  else {
    return `${data.license}`;
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === "No license") {
//     return '';
//   }
  
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license == "none" || !data.license) {
    return '';
  }
  else {
    return `## License
This application is covered under ${data.license}.`;
  }
    
}
// Optional prompt gen
function generateInstall(data){
  if (!data.installation) {
    return '';
  }
  else {
    return `## Installation
${data.installation}`;
  }
}
function generateUsage(data){
  if (!data.usage) {
    return '';
  }
  else {
    return `## Usage
${data.usage}`;
  }
}
function generateTOC(data) {
  if(!data.tableOfContents) {
    return '';
  }
  else {
    return `## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    `;
  }
}
function generateContributing(data) {
  if(!data.confCont) {
    return '';
  }
  else if(data.confCont && !data.ownOrCov) {
    return `## Contributing
[Contributor Covenant](https://www.contributor-covenant.org/)
    `;
  }
  else {
    return `## Contributing
${data.contributing}
    `;
  }
}
function generateTests(data) {
  if(!data.tests) {
    return '';
  }
  else {
    return `## Tests
${data.tests}
    `;
  }
}
function generateQuestions(data) {
  if(!data.confirmContacts) {
    return '';
  }
  else {
    return `## Questions
If questions reach me at: 
  - [My Github](https://github.com/${data.github})
  - [My Email](mailto:${data.email})
    `;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data)}
## Description
${data.description}

${generateTOC(data)}

${generateInstall(data)}

${generateUsage(data)}

${renderLicenseSection(data)}

${generateContributing(data)}

${generateTests(data)}

${generateQuestions(data)}


[Back To the Top](#description)
  `;
}

module.exports = generateMarkdown;
