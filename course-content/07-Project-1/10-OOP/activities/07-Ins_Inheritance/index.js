// In programming, inheritance is a way for a constructor function or a class to inherit properties and methods 
// from another class. To accomplish inheritance through constructor functions.

// Constructor can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
// We begin by creating a constructor function called Animal that has three properties and a method. See the following code for an example:
function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
  this.hasFeelings  = function () {
    console.log('YES! I FEEEEEL!');
  };
}



// Dog constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
// We then create two new constructor functions called Dog and Cat that use the call() method to inherit the name, age, breed, and nap() method as shown in the following example:
// https://www.w3schools.com/js/js_function_call.asp
function Dog(name, age, breed, puppies) {
  Animal.call(this, name, age, breed);
  this.puppies = puppies;
}

Dog.prototype.bark = function () {
  console.log('Woof!');
};

// Cat constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
function Cat(name, age, breed, kittens) {
  Animal.call(this, name, age, breed);
  this.kittens = kittens;
}

Cat.prototype.meow = function () {
  console.log('Meow!');
};

// Then we instantiate two objects, dog and cat, from the Dog and Cat constructor functions respectively, as follows:
const dog = new Dog('Rex', 2, 'Bulldog', ['Baxter', 'Marley', 'Scooby']);
const cat = new Cat('Tom', 2, 'Shorthair', ['Garfield', 'Felix', 'Salem']);


console.log(dog);
// Dog {
//   name: 'Rex',
//   age: 2,
//   breed: 'Bulldog',
//   nap: [Function (anonymous)],
//   puppies: [ 'Baxter', 'Marley', 'Scooby' ]
// }

console.log(Dog.prototype);
// { bark: [Function (anonymous)] }
dog.bark();
dog.nap();//'Zzzzzzzzz'
dog.hasFeelings();


console.log(cat);
// Cat {
//   name: 'Tom',
//   age: 2,
//   breed: 'Shorthair',
//   nap: [Function (anonymous)],
//   kittens: [ 'Garfield', 'Felix', 'Salem' ]
// }

cat.meow();
cat.nap();//'Zzzzzzzzz'
