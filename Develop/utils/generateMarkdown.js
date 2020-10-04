// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ![license BADGE](https://img.shields.io/badge/dynamic/json?url=<URL>&label=<${data.license}>&query=<$.DATA.LICENSE>&color=<brightgreen>)

  ## Description
  ${data.description}

  ## Table of Contents
    *[Installation](#Installation)
    *[Usage](#Usage)
    *[Contributing](#Contributing)
    *[Tests](#Tests)
    *[Questions](#Questions)

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
