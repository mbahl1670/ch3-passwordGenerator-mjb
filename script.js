// Create an object that will store the password's criteri
var newPassword = {
  length: 0,
  uppercase: true,
  lowercase: true,
  numbers: true,
  specialChar: true
};


/* assigned a global variable of newChar.  was running into issues where the local variables assigned during the loop to get a 
random character were lost */
var newChar;

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
  // checks that at least one of the criteria is true
  if (newPassword.uppercase || newPassword.lowercase || newPassword.numbers || newPassword.specialChar) {
    return;
  }
  else {
    console.log("You must have a password made up of at least an UPPER case letter, 'lower' case letter, numbers or special characters.  Please enter your criteria again.");
    window.alert("You must have a password made up of at least an UPPER case letter, 'lower' case letter, numbers or special characters.  Please enter your criteria again.");
    askCriteria();
  }
};

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};


var randomUCLetter = function() {
  var alphabetUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabetUC[Math.floor(Math.random() * alphabetUC.length)];
};

var randomLCLetter = function() {
  var alphabetLC = "abcdefghijklmnopqrstuvwxyz";
  return alphabetLC[Math.floor(Math.random() * alphabetLC.length)];
};

var randomSpecialChar = function() {
  var  rspecChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\"];  
  return rspecChar[Math.floor(Math.random() * rspecChar.length)];
};



var getChar = function () {
  debugger;
  var charType = randomNumber(1,4);
  if (charType === 1 && newPassword.uppercase) { // picks an uppercase letter
    console.log("case1: random upper case letter");
    newChar = randomUCLetter();
    return newChar;
  }

  else if (charType === 2 && newPassword.lowercase) { // picks an lowercase letter
    console.log("case2: randome lower case letter");
    newChar = randomLCLetter();
    return newChar;
  }
  
  else if (charType === 3 && newPassword.numbers) { // picks a number
    console.log("case3: random number");
    newChar = randomNumber(0,9);
    return newChar;
  }
    
  else if (charType === 4 && newPassword.specialChar) { // picks a special character
    console.log("case4: random special character")
    newChar = randomSpecialChar();
    return newChar;
  }
  
  else {
    newChar = undefined;
    getChar();
  }
};


// Assignment code here
var generatePassword = function() {  
  // debugger;
  // Ask for pasword criteria with a series of promps
  askCriteria();
  
  // Verify that at least one character type has been selected
  validateCriteria();

  //Password is generated
  
  // new random character is generated and assigned to variable newChar
  getChar();
  
  // have the function return the new password
  return newChar;
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
