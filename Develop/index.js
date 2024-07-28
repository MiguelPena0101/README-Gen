// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for usage:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for contributing:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide examples of how to run tests:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = `
    # ${data.title}
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Description
    ${data.description}
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## License
    This project is licensed under the ${data.license} License.
    
    ## Contributing
    ${data.contributing}
    
    ## Tests
    ${data.tests}
    
    ## Questions
    If you have any questions, please contact me at [${data.email}](mailto:${data.email}). You can also find me on GitHub: [${data.github}](https://github.com/${data.github}).
      `;
      
      fs.writeFile(fileName, content, (err) =>
        err ? console.error(err) : console.log('README.md has been generated!')
      );
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
