// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  // this.createdOn = Date.now();
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Create a new object using the 'BlogPost' constructor
const post = new BlogPost(
  'John Doe',
  'My First Post',
  'Dogs are super cute!',
  '12/15/2021'
);

// TODO: Call the 'printMetaData()' method on the new object
post.printMetaData();

//===================
//===================

// Constructor function called 'Developer' that takes in 'name' and 'tech'
// Includes a method called 'introduction()'
function Developer(name, tech) {
  this.name = name;
  this.tech = tech;
  this.introduction = () => {
    console.log(`Hi, my name is ${this.name} and I love ${this.tech}!`);
  };
}

// Creates a new object using the 'Developer' constructor
const rita = new Developer('Rita', 'JavaScript');
const bob = new Developer('Bob', 'CSS');

console.log(rita);
// Calls the 'introduction()' method on the new object
console.log(rita.introduction);
bob.introduction();
// bob.age = 22;
// rita.yell = function(){....}

console.log(rita instanceof Developer); 

function Student() {
  this.condition = "tired";
  this.hungry = true;
  
}