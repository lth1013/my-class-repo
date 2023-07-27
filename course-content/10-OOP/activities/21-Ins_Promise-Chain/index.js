const inquirer = require('inquirer');
const fetch = require('node-fetch');

inquirer
  .prompt({
    type: 'input',
    name: 'username',
    message: 'Enter a Github Username:',
  })
  // promises are chained to directly pass inquirer data into fetch request
  .then((res) => fetch(`https://api.github.com/users/${res.username}`))
  // promises are chained to parse the request for the json data
  .then((res) => res.json())
  // json data is accepted as user and logged to the console
  .then((user) => console.log(user));

// same thing as...
// const answersPromise = inquirer
//   .prompt({
//     type: 'input',
//     name: 'username',
//     message: 'Enter a Github Username:',
//   });

// const fetchResponsePromise = answersPromise.then((res) => {
//   return fetch(`https://api.github.com/users/${res.username}`)
// });

// const convertResponseJSONtoObjectPromise = fetchResponsePromise.then(() => {
//   // fetch returns a Response object
//   // the json() method on this object returns a promise
//   // https://developer.mozilla.org/en-US/docs/Web/API/Response/json
//   return res.json(); // this is already a promise generator so...
//   // we can also do the following:
//   // res.json().then((user) => console.log(user)); 
// });

// convertResponseJSONtoObjectPromise.then((user) => {
//   console.log(user);
// });



  

