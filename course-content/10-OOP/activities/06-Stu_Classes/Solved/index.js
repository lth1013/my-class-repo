// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.

// TODO: Give BlogPost a property called 'comments' that is set to an empty array.

// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
  
  }

  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.
class Comment {
  constructor(authorName, text, createdOn, reaction) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
    this.reaction = reaction;
  }

  printMetaData() {
    console.log(
      `Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`
    );
  }
}

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment(
  'Jane Doe',
  'This post is super cool!',
  '12/18/2021',
  '🐶😺'
);

// TODO: Create a new object using the BlogPost class constructor.
const newPost = new BlogPost(
  'John Doe',
  'My Third Post',
  'Both dogs and cats are super cute!',
  '12/17/2021'
);

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
newPost.addComment(newComment);

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
newPost.printMetaData();
newComment.printMetaData();



// =================================

class Character {
  constructor(name, strength, hitPoints) {
    // if (!name) {
    //   throw new Error("You are missing the name.");
    // }
    // if (!strength) {
    //   throw new Error("You are missing the strength.");
    // }
    // if (!hitPoints) {
    //   throw new Error("You are missing the hitPoints.");
    // }
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }

  // Method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log('------------');
  }

  // Method which determines whether or not a character's "hitpoints" are less then zero
  // Returns true or false depending upon the outcome
  isAlive() {
    if (this.hitPoints <= 0) {
      console.log(`${this.name} has been defeated!`);
      return false;
    }
    return true;
  }

  // Method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    if (opponent instanceof Character) {
    console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);
    opponent.hitPoints -= this.strength;
    } else {
      throw 'Target is not a Character!';
    }
    // console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);
    // opponent.hitPoints -= this.strength;
  }
}

// Creates two unique characters using the "character" constructor
const grace = new Character('Grace', 30, 75);
const dijkstra = new Character('Dijkstra', 20, 105);

console.log("instanceof dijkstra", dijkstra instanceof Character);

// This keeps track of whose turn it is
let graceTurn = true;

grace.printStats();
dijkstra.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grace.isAlive() || !dijkstra.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
  } else if (graceTurn) {
    grace.attack(dijkstra);
    dijkstra.printStats();
  } else {
    dijkstra.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 2000);
