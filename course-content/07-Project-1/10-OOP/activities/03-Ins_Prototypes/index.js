// Prototype methods on constructor function

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype.nap = function () {
  console.log('Zzzzzzzzz');
};

const dog = new Dog('Rex', 2, 'Bulldog');

dog.nap();


//===============


// 🔑 Nearly everything in JavaScript is an object. Strings, dates, numbers, and arrays are all standard built-in objects in JavaScript.

// 🔑 Objects in JavaScript have prototype objects. A link is made between the object instance and its prototype (its __proto__ property, which is derived from the prototype property on the constructor). Properties and methods are found by walking up the chain of prototypes.

const myArray = [2, 4, 6, 8];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Array.prototype.forEach()
// We can see the full list of inherited methods. Among them is the forEach() method.
console.log("myArray.__proto__", myArray.__proto__);
console.log("Object.getPrototypeOf(myArray)", Object.getPrototypeOf(myArray))


// We were able to use the Array.prototype.forEach() method because myArray was derived from the built-in Array object.
myArray.forEach((num) => console.log(num));

// 🔑 Additionally, we can access methods and properties further up the prototype chain. We create a person object with the occupation of Full-Stack Web Developer, which is a string. See the following code inside of index.js for an example:
const person = {
  name: 'Eric',
  age: 28,
  occupation: 'Full-Stack Web Developer',
};

console.log("person.__proto__", person.__proto__);
console.log("Object.getPrototypeOf(person)", Object.getPrototypeOf(person))

console.log("************");

console.log("person.occupation.__proto__", person.occupation.__proto__);
console.log("Object.getPrototypeOf(person.occupation)", Object.getPrototypeOf(person.occupation))
console.log(person.occupation.toLowerCase());

console.log("************");

//hmmmmmmm (thinking) 
var arr = [];
var arrTwo = [];

var arr = new Array();


//===============

// These are all built-in methods of JavaScript. What if you wanted to make your own prototype methods?


function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
}

Movie.prototype.logInfo = function () {
  return `${this.title} was released in ${this.releaseYear}`;
};

const superman = new Movie('Superman', 1978);
console.log(superman.logInfo()); // => Superman was released in 1978


//We can check whether or not a property was inherited by using the hasOwnProperty() method. This will return true if the specified property is a direct method. Otherwise it will return false if the specified property was inherited. See the following code for an example:
console.log(superman.hasOwnProperty('logInfo'));


//===============

// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
  // this.printInfo = function() {
  //  console.log("Name: " + this.name + "\nPosition: " + this.position +
  //  "\nAge: " + this.age + "\nLanguages: " + this.language);
  // };

}

var sally = new Programmer("Sally Smith", "Supreme CodeMaster", 33, "JavaScript");

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nAge: " + this.age + "\nLanguages: " + this.language);
};

// new programmer object is initialized to bob and is provided with the variables
// necessary to create all of the properties
var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");

// calls the printInfo method for bob to print all of his information to the console
bob.printInfo();

console.log("----");

sally.printInfo();

console.log("----------Bob------------");

console.log(bob);
// Programmer {
//   name: 'Bob Smith',
//   position: 'Supreme CodeMaster',
//   age: 33,
//   language: 'JavaScript'
// }

console.log("----------Programmer.prototype------------");

console.log(Programmer.prototype);

// Programmer {
//   printInfo: [Function (anonymous)],
//   printAwesome: [Function: printinfo]
// }

//===============

// Prototype methods on constructor function
function Human(name, location, eyes) {

  this.name = name;
  this.location = location;
  this.eyes = eyes;
  this.age = 0;
  // this.scream = function () {
  //   console.log(`AHHHHHH ${this.name}`);
  // };
  
}

const asher = new Human('Asher', "bay area", "Blue");
const pat = new Human('Pat', "bay area", "Brown");

Human.prototype.scream = function () {
  console.log(`AHHHHHH ${this.name}`);
};

console.log(Human.prototype);
// {scream: ƒ, constructor: ƒ}

asher.scream();
pat.scream();

