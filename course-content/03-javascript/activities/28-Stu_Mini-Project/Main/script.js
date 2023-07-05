var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

var playGame = function() {
  // Ask user for their choice
  var userChoice = prompt("Enter R, P, or S:");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  alert("The computer chose " + computerChoice);

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    alert("You lost!");
  }

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();



// Things we need
// Need to track:
//User input

//Wins - set to 0

//Losses - set to 0

//Ties - set to 0

//Computer choice List - Array bracket [R, P, S]

//Global variable called Computer choice

//Things we need to do - actions
//Start the game
    //Prompt user to enter R, P or S characters
        //If output is not null

            //Generate computer choice
                //should radomly choose a character, R, P or S
            //Alert the user to what the computer has chosen
            //Compare user and computer choices
                //Conditions on wins, losses and ties.
                    //If User P
                            //If Computer P then
                                //Tie +1
                            //If computer R then
                                //User Wins +1
                            //If computer S then
                                //User loss +1
                    //If User R
                            //If Computer P then
                                //User loss +1
                            //If computer R then
                                //Tie +1
                            //If computer S then
                                //User Win +1
                    //If User S
                            //If Computer P then
                                //User Win +1
                            //If computer R then
                                //User Loss +1
                            //If computer S then
                                //Tie +1
   //Show an alert of wins, losses and ties
   //Ask the user if they want to continue the game or not - confirm
        //If yes, jump to line 15. This provides a loop.
        //If no, alert the game is over
