const inquirer = require('inquirer');
const fs = require('fs');
//It's done when the application asks the user, "What is your name?"
  
 //It's done when the application asks the user, "What languages do you know?"

 //It's done when the application asks the user, “What is your preferred method of communication?"

 //It's done after I have written those responses to a file.

// It's done after I have written those responses to a file.


function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input?',
            name: 'languages',
            message: 'What languages do you know?'
        },
        {
            type: 'input',
            name: 'preferred method of communication',
            message: 'What is your preferred method of communication?'
        },
    ])
    //write to index.html with JSON.stringify
    .then(answers => {
        const htmlPageContent = JSON.stringify(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
};
promptUser();