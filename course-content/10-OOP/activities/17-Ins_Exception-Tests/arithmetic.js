// Create a new Arithmetic class that behaves much like the previous demonstration.
class Arithmetic {
  constructor(num1, num2, operator) {
    
    // Checks to see that both numbers being passed in are of type number. If not, throw an error.

    // Q:Why is it helpful for a function to intentionally throw an error?
    // A: If we throw a helpful error message when a function is misused, the issue is easier to track down and resolve before it causes more errors elsewhere.
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error('Please enter numbers for calculation');
    };
    
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
  }
};

const example = new Arithmetic("1", 2, "add");
// throw new Error('Please enter numbers for calculation');
module.exports = Arithmetic;
