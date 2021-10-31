// Assignment code here

// Create an object that will store the password and it's criteria
var newPassword = {
  length: 0,
  uppercase: true,
  lowercase: true,
  numbers: true,
  specialChar: true,
  passWord: [],
  reset: function() {
    this.length = 0;
    this.uppercase = true;
    this.lowercase = true;
    this.numbers = true;
    this.specialChar = true;
    this.passWord = [];
  }
};

// variables to validate if the final password will have at least one of each entered character
var isUpper = false;
var isLower = false;
var isNumber = false;
var isSpec = false;

/* assigned a global variable of newChar.  was running into issues where the local variables assigned during the loop to get a 
random character were lost */
var newChar;



// FUNCTIONS FOR GATHERING USER DEFINED CRITERIA
var askCriteria = function() {
  // set the length of the new password to 0 and clear the old password for repeated clickings of the button  
  newPassword.reset();
  isUpper = false;
  isLower = false;
  isNumber = false;
  isSpec = false;
  // Ask for length of the password, accept values between 8 - 128 characters long, only allow a valid response
  // the while loop will only allow the function to proceed if a value is entered between 8-128
  console.log("How many characters do you want your password to be?  Please choose a number between 8 and 128.");
  newPassword.length = window.prompt("How many characters do you want your password to be?  Please choose a number between 8 and 128.");
  // convert the string entered to an integer number
  newPassword.length = parseInt(newPassword.length);

  while (isNaN(newPassword.length) || newPassword.length < 4 || newPassword.length > 128) {
    newPassword.length = window.prompt("This is not a valid password length!  Please choose a number between 8 and 128.");
    newPassword.length = parseInt(newPassword.length);
  }
  
  /// Ask if uppercase letters allowed, only allow a valid response
  console.log("Do you want to include UPPERCASE letters in your password?");
  newPassword.uppercase = window.confirm("Do you want to include UPPERCASE letters in your password?");


  // Ask if lowercase letters allowed, only allow a valid response
  console.log("Do you want to include 'lowercase' letters in your password?");
  newPassword.lowercase = window.confirm("Do you want to include 'lowercase' letters in your password?");


  // Ask if numbers allowed, only allow a valid resposne
  console.log("Do you want to include numbers in your password?");
  newPassword.numbers = window.confirm("Do you want to include numbers in your password?");
  
  // Ask if special characters allowed, only allow a valid resposne
  console.log("Do you want to include special characters in your password?\nWarning: A space ' ' is considered a special character.");
  newPassword.specialChar = window.confirm("Do you want to include special characters in your password?\nWarning: A space ' ' is considered a special character.");

  // display what useer has entered for debugging and so user can view what they entered
  console.log(newPassword);
};



// FUNCTION TO VALIDATE THE CRITERIA ENTERED
var validateCriteria = function() {
  // checks that at least one of the criteria is true
  if (newPassword.uppercase || newPassword.lowercase || newPassword.numbers || newPassword.specialChar) {
    return;
  }
  else {
    console.log("You must have a password made up of at least an UPPER case letters, 'lower' case letters, numbers or special characters.  Please enter your criteria again.");
    window.alert("You must have a password made up of at least an UPPER case letters, 'lower' case letters, numbers or special characters.  Please enter your criteria again.");
    askCriteria();
  }
};

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};




// FUNCTIONS RELATED TO GENERATING RANDOM CHARACTERS

var randomUCLetter = function() { // generate a random UPPER CASE letter
  var alphabetUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabetUC[Math.floor(Math.random() * alphabetUC.length)];
};

var randomLCLetter = function() { // generate a random 'lower case' letter
  var alphabetLC = "abcdefghijklmnopqrstuvwxyz";
  return alphabetLC[Math.floor(Math.random() * alphabetLC.length)];
};

var randomSpecialChar = function() { // generate a random special character
  // ran into issues entering the special characters into an array.  Found it less confusing to just enter them all separately
  var  rspecChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\"];  
  return rspecChar[Math.floor(Math.random() * rspecChar.length)];
};


var getChar = function () { // generates a rancom character.  found that I needed to store the randomaly generated character into a varible ousdide the function
  var charType = randomNumber(1,4);
  switch (charType) {
    case 1:
      if (newPassword.uppercase) { // picks an uppercase letter  
        isUpper = true;
        newChar = randomUCLetter();
        return newChar;
      }
      else {
        getChar();
      }
      break;

    case 2:
      if (newPassword.lowercase) { // picks an lowercase letter
        isLower = true;
        newChar = randomLCLetter();
        return newChar;
      }
      else {
        getChar();
      }
      break;
    
    case 3:
      if (newPassword.numbers) { // picks a number
        isNumber = true;
        newChar = randomNumber(0,9);
        return newChar;
      }
      else {
        getChar();
      }
      break;
      
    case 4:
      if (newPassword.specialChar) { // picks a special character  
        isNumber = true;
        newChar = randomSpecialChar();
        return newChar;
      }
      else {
        getChar();
      }
      break;
    
    defalut: 
      getChar();
      break;
  }
};



var generatePassword = function() {  
  // Ask for pasword criteria with a series of promps
  askCriteria();  
  // Verify that at least one character type has been selected
  validateCriteria();
  //Password is generated
  // new random character is generated and assigned to variable newChar
  for(var i = 0; i < newPassword.length; i++) {
    getChar();  // assignes a random character matching usder defiend criteria to variable newChar
    newPassword.passWord.push(newChar); // adds the new random character to the storage array inside object newPassword
  }
  // have the function return the new password
  return newPassword.passWord.join("");
};

/*
var createNewPassword = function () {
  for(var i = 0; i < newPassword.length; i++) {
    getChar();  // assignes a random character matching usder defiend criteria to variable newChar
    newPassword.passWord.push(newChar); // adds the new random character to the storage array inside object newPassword
  }
}

var validatePassword = function() {
  if (newPassword.uppercase === isUpper && newPassword.lowercase === isLower && newPassword.numbers === isNumber && newPassword.specialChar === isSpec) {
    return true;
  }
  else {
    isUpper = false;
    isLower = false;
    isNumber = false;
    isSpec = false;
    newPassword.passWord = [];
    return false;
  }
};

var generatePassword = function() {  
  // Ask for pasword criteria with a series of promps
  askCriteria();  
  // Verify that at least one character type has been selected
  validateCriteria();
  // debugger;
  // create a new Password
  createNewPassword();
  // check if the password contains all of the criteria the user entered
  if (validatePassword()) { 
    // if the new password does contain all of the criteria, return the password as a string
    console.log("Password : " + newPassword.passWord.join(""));
    return newPassword.passWord.join("");  
  }
  else {
    // if the new password does not contain all the criteria, make a new password
    createNewPassword();
    validatePassword();
  }
};
*/
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
