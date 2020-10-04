// //error handling for NONE  - license, badge, section
function errorHandlingBadge(license) {
  //if none, do NO BADGE, if there's one, then pass that through
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

function errorHandlingInstallation(installation) {
  if (installation) {
    return `
## Installation
To install necessary dependencies, run the following command:
${installation}
  `
  }
  return '';
}

function licenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`
  }
  return ''
};

function licenseText(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} License.`
  }
  return ''
};

function usageLink(usage) {
  if (usage) {
    return `\n* [Usage](#usage)\n`
  }
  return ''
};

function usageText(usage) {
  if (usage) {
    return `
## Usage
${usage}
`
  }
  return '';
}

function contributingLink(contributing) {
  if (contributing) {
    return `\n* [Contributing](#contributing)\n`
  }
  return ''
};

function contributingText(contributing) {
  if (contributing) {
    return `
## Contributing
${contributing}
`
  }
  return '';
}

//render badge function

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${errorHandlingBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
${usageLink(data.usage)}
${contributingLink(data.contributing)}
${licenseLink(data.license)}
* [Tests](#tests)
* [Questions](#questions)

${errorHandlingInstallation(data.installation)}

${usageText(data.usage)}

${contributingText(data.contributing)}

${licenseText(data.license)}

## Tests
To run tests, run the following command: 
${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}.
You can find more of my work at github.com/${data.username}.
`;
}

module.exports = generateMarkdown;
