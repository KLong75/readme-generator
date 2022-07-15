// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Provide a short description explaining your project. Consider the following: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?'
    },
    {
        type: 'input',
        name: 'deployedUrl',
        message: 'Enter the URL of your deployed application.'
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Provide instructions for using your project.'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please list guidelines for contributing to your project.'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please provide any testing instructions for your project.'
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'Which license?',
        choices: [
            "MIT", 
            "Mozilla_Public_2.0",
            "Apache_2.0",
            "Boost_Software_1.0",
            "The_Unlicense",
            "None"
        ]
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?'
    },
  ];

// Write README file
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    const generatedString = generateMarkdown(answers);
    //console.log(generatedString);
    fs.writeFile('./output/README.md', generatedString, () => {
        console.log("README successfully generated!")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
