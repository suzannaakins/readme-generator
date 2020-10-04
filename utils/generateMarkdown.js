// //error handling for NONE  - license, badge, section
// function errorHandlingTitle(title) {
//if none, do NO BADGE, if there's one, then pass that through
//   if (title) {
//     return title
//   }
//   return 'Project Title'
// }

//render badge function

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license);
  return `
# ${data.title}

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command: 
${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}.
You can find more of my work at github.com/${data.username}.
`;
}

module.exports = generateMarkdown;
