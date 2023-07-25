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





