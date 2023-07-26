// TODO: Debug the code so that Comment shows the reaction emojis when its printMetaData() function is run.

class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }

  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }
}

class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }

  // We use method overriding to change the value of printMetaData for only instances of the Comment class constructor.
  printMetaData() {
    console.log(
      `Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`
    );
  }
}

const newPost = new BlogPost(
  'John Doe',
  'My Fourth Post',
  'Dogs, cats, and snakes are super cute!',
  '12/19/2021'
);

const newComment = new Comment(
  'Jane Doe',
  'This post is really awesome!',
  '12/20/2021',
  '🐶😺🐍'
);

newPost.printMetaData();
newComment.printMetaData();


// Method Overloading

const OverloadDemo = function () {
//In the following example, the area() method will return the area of a rectangle based on how many arguments are passed into it:
  this.area = function (x, y) {
    console.log('x = ', x);
    //We use a conditional statement to check whether y is passed in. If there is no y argument, then we log y is not provided—along with the area of the square—into the console, as shown in the following example:
    if (!y) {
      console.log('y is not provided');
      //The Math.pow() function returns the base to the exponent power, as in baseexponent, the base and the exponent are in decimal numeral system.
      //Math.pow(7, 2);    // 49
      return `\nThe area of the square is ${Math.pow(x, 2)} sq units`;
    }
    //Otherwise, we log the value of y along with the area of the rectangle, as follows:
    console.log('y = ', y);
    return `\nThe area of the rectangle is ${x * y} sq units`;
  };
};

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
