// Constructor class can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
class Cat {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  nap() {
    console.log('Zzzzzzzzz');
  }
}

// Sets the variables "catOne" and "catTwo" to a Cat object and initializes with name, age, and breed properties
const catOne = new Cat('Tom', 2, 'Shorthair');
const catTwo = new Cat('Garfield', 3, 'Bengal');

// Calling Cat's nap method
catOne.nap();
catTwo.nap();


//===========

class Shape {
  // Just like constructor functions, classes can accept arguments
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }

}

const shapeOne = new Shape(25, 30);
const shapeTwo = new Shape(25, 10);
const shapeThree = new Shape(19, 25);
const shapeFour = new Shape(250, 250);

console.log(shapeOne);
shapeOne.printInfo();

