var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
	var profile = {
	  first: firstNameInput.value,
	  last: lastNameInput.value,
	  email: emailInput.value,
    password: passwordInput
  };
  // TODO: Set new submission to local storage 
  var profileString = JSON.stringify(profile);
  localStorage.setItem("profile", profileString);
  console.log(profileString)
});