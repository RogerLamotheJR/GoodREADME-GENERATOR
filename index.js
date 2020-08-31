const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

//array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What's is the title"
    },
    {
      type: 'input',
      name: 'description',
      message: "What's your description"
      },
  
      {
        type: 'input',
        name: 'installation',
        message: "What's is the installation",
      },
      {
        type: 'input',
        name: 'usage',
        message: "What's your useage",
        },
        {
          type: "list",
          message: "Select license",
          name: "License",
          choices: [
              "MIT",
              "GVL-GPL 3.0",
              "APACHE 2.0",
              "BSD 3",
              "None"
            ]
        }, 
        {
          type: "input",
          message: "Contributors?",
          name: "Contributors"
      },
      {
          type: "input",
          message: "How do you test your project?",
          name: "Test"
      },
        {
            type: 'input',
            name: 'username',
            message: "What's your username",
            default: function() {
              return 'Doe';
            }
        },
        {
              type: 'inpute',
              name: 'email',
              message: "What's your email",
              default: function() {
                return 'Doe';
              }
              },
    
    
    ];

  //Write to a file
  function writeToFile (data){
    fs.writeFile(data, (err) => {
      if (err) {return console.log(err);}
    });
  }
  // function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
       
        writeToFile("./README.md", response);
      
    })
}

init();
