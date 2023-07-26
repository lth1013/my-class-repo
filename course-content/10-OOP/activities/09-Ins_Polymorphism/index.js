// In OOP, polymorphism refers to the ability to create a variable, a function, or an object that has more than one form.
// 🔑 One example of polymorphism is method overriding, which allows a child class to provide a specific implementation of a method that already exists from a parent class but behaves differently.
function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
  // The Animal constructor has a method called, getLives() that will return the number 1 
  this.getLives = function () {
    return 1;
  };
}

// A Dog constructor function that inherits from the Animal constructor function:

function Dog(name, age, breed, puppies) {
  Animal.call(this, name, age, breed);
  this.puppies = puppies;
}

Dog.prototype.bark = function () {
  console.log('Woof!');
};

//  The  Cat constructor function that inherits from the Animal constructor function but overrides the getLives() method, as shown in the following example:
function Cat(name, age, breed, kittens) {
  Animal.call(this, name, age, breed);
  this.kittens = kittens;
  // 'getLives()' method is overriden to provide Cat with a different functionality
  this.getLives = function () {
    return 9;
  };
}

Cat.prototype.meow = function () {
  console.log('Meow!');
};

// We instantiate new objects from the Dog and Cat constructor functions and console log the getLives() methods from both, as follows:
const dog = new Dog('Rex', 2, 'Bulldog', ['Baxter', 'Marley', 'Scooby']);
const cat = new Cat('Tom', 2, 'Shorthair', ['Garfield', 'Felix', 'Salem']);

// The output shows the numbers 1 and 9 because we have overriden the getLives() method from within the Cat constructor function, as follows:
console.log(dog.getLives());// 1
console.log(cat.getLives());// 9




// Method overloading 

const rectangle = new OverloadDemo();
// We see that x = 5 and y = 7, so the area of the rectangle is calculated to be 35 sq units.
// But then we see that x = 5 and y is not provided. That implies that this is a square, so the area of the square is 25 sq units.
console.log('rectangle.area(5, 7)', rectangle.area(5, 7));
console.log('rectangle.area(5)', rectangle.area(5));

// ========================

// Helper function to evaluate if a number is within a given range
//The inRange() helper function and a constructor called Student()
// x = 95, min = 90, max = 100
//(95 - 90) * (95 - 100) = (5 * -5) => -25
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

//The Student() constructor called displayGrade(). We have been tasked with building out this method by checking the data type for the value of grade.
function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    //We check that there is no input for grade, and if so, we immediately throw an error
  
    //Then we declare the variable response to be used in the conditional statements
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    //We respond differently depending on whether or not input is a string or a number. So first we will check whether input is a number. If it is, then we will use a series of if statements and the helper function inRange() to set the response variable to the letter grade and return it.
    if (typeof input === 'number') {
      if (inRange(input, 90, 100)) {
        response = 'A';
      }
      if (inRange(input, 80, 89)) {
        response = 'B';
      }
      if (inRange(input, 70, 79)) {
        response = 'C';
      }
      if (inRange(input, 60, 69)) {
        response = 'D';
      }
      if (input < 60) {
        response = 'F';
      }

      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    // If input is a string, we set up a switch statement to handle different cases of letter grades, set the response variable to the range of grades, and return it
    if (typeof input === 'string') {
      switch (input) {
        case 'A':
          response = '90 - 100';
          break;
        case 'B':
          response = '80 - 89';
          break;
        case 'C':
          response = '70 - 79';
          break;
        case 'D':
          response = '60 - 69';
          break;
        case 'F':
          response = '0 - 59';
          break;
        default:
          response = '0';
          break;
      }
      return response;
    }
  };
}
// We create an instance of the Student and test the displayGrade() method by passing it a grade of first 95 and then 'B'
const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
