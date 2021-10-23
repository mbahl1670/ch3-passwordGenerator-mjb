// Create an object that will store the password's criteri
var newPassword = {
  length: 0,
  uppercase: true,
  lowercase: true,
  numbers: true,
  specialChar: true
};

var askCriteria = function() {
  // set the length of the new password to 0 for repeated clickings of the button
  newPassword.length = 0;  
  // Ask for length of the password, accept values between 8 - 128 characters long, only allow a valid response
  // the while loop will only allow the function to proceed if a value is entered between 8-128
  console.log("How many characters do you want your password to be?  Please choose a number between 8 and 128.");
  newPassword.length = window.prompt("How many characters do you want your password to be?  Please choose a number between 8 and 128.");
  // convert the string entered to an integer number
  newPassword.length = parseInt(newPassword.length);

  while (isNaN(newPassword.length) || newPassword.length < 8 || newPassword.length > 128) {
    newPassword.length = window.prompt("This is not a valid password length!  Please choose a number between 8 and 128.");
    newPassword.length = parseInt(newPassword.length);
  }
  
  /// Ask if uppercase letters allowed, only allow a valid response
  console.log("Do you want to include UPPERCASE letters in your passwsord?");
  newPassword.uppercase = window.confirm("Do you want to include UPPERCASE letters in your passwsord?");


  // Ask if lowercase letters allowed, only allow a valid response
  console.log("Do you want to include 'lowercase' letters in your passwsord?");
  newPassword.lowercase = window.confirm("Do you want to include 'lowercase' letters in your passwsord?");


  // Ask if numbers allowed, only allow a valid resposne
  console.log("Do you want to include numbers in your passwsord?");
  newPassword.numbers = window.confirm("Do you want to include numbers in your passwsord?");
  
  // Ask if special characters allowed, only allow a valid resposne
  console.log("Do you want to include special characters in your passwsord?");
  newPassword.specialChar = window.confirm("Do you want to include special characters in your passwsord?");

  // display what useer has entered for debugging
  console.log(newPassword);
};

var validateCriteria = function() {
  if (newPassword.uppercase || newPassword.lowercase || newPassword.numbers || newPassword.specialChar) {
    return;
  }
  else {
    console.log("You must have a password made up of at least an UPPER case letter, 'lower' case letter, numbers or special characters.  Please enter your criteria again.");
    window.alert("You must have a password made up of at least an UPPER case letter, 'lower' case letter, numbers or special characters.  Please enter your criteria again.");
    askCriteria();
  }
}

// Assignment code here
var generatePassword = function() {  
  
  // Ask for pasword criteria with a series of promps
  askCriteria();
  
  // Verify that at least one character type has been selected
  validateCriteria();

  //Password is generated

  
  // have the function return the new password
  return newPassword.length;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Calls the function to generate the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// When button is selected, calls the function to write the password
generateBtn.addEventListener("click", writePassword);
