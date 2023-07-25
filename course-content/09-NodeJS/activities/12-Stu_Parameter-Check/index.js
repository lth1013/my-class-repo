// It's done when I use `process.argv` to assign two arguments to variables.

//* It's done when I compare those two variables to see whether they are the same or not.

//* It's done if the program returns `true` when the values are the same and `false` if they are not. 


// write the function
function checkParams() {
    // assign the arguments to variables
    var firstArgument = process.argv[2];
    var secondArgument = process.argv[3];

    // compare the variables
    if (firstArgument === secondArgument) {
        console.log(true);
    } else {
        console.log(false);
    }
}
checkParams();