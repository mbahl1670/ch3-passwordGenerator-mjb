// Assignment code here
var generatePassword = function() {  
  console.log("Generate a password")
  var newPassword = "Password";
  // Ask for pasword criteria with a series of promps

  // Ask for length of the password, accept values between 8 - 128 characters long, only allow a valid response

  /// Ask if uppercase letters allowed, only allow a valid response

  // Ask if lowercase letters allowed, only allow a valid response

  // Ask if numbers allowed, only allow a valid resposne

  // Ask if special characters allowed, only allow a valid resposne

  // Verify that at least one character type has been selected

  //Password is generated

  
  // have the function return the new password
  return newPassword;
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
