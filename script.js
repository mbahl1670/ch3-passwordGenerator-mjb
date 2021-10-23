// Assignment code here
var generatePassword = function() {  
  console.log("Generate a password")
  
  // declare the newPassword as an object with each of the password criteria as a key of the object
  var newPassword = {
    length: 0,
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialChar: true
  };
  
  console.log(newPassword);
  // Ask for pasword criteria with a series of promps
  // Ask for length of the password, accept values between 8 - 128 characters long, only allow a valid response
  
  // the while loop will only allow the function to proceed if a value is entered between 8-128
  while (newPassword.length < 8 || newPassword.length > 128) {
    console.log("How many characters do you want your password to be?  Please specific a number between 8 and 128.");
    newPassword.length = window.prompt("How many characters do you want your password to be?  Please specific a number between 8 and 128.");
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

  // Verify that at least one character type has been selected
 

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
