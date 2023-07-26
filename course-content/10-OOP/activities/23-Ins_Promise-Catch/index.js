const inquirer = require('inquirer');
const fetch = require('node-fetch');

inquirer
  .prompt({
    type: 'input',
    name: 'username',
    message: 'Enter a Github Username:',
  })
  .then((res) => fetch(`https://api.github.com/users/${res.username}`))
  .then((res) => res.json())
  .then((user) => {
    // throw new Error('Error');
    console.log(user);
    //throw new Error('Happily Error after.');
    return "console.log(user)";
  })
  // Promise execution will route to the '.catch()' callback when
  // an error occurs in any of the promises from before.
  .catch((err) => {
    console.log(err);
    // if catch is called then the return value from the catch will
    // be wrapped in a promise for chaining
    return "console.log(err)";
  })
  .then((value) => {
    console.log(value);
  })
