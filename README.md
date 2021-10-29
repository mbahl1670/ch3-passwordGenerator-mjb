# Password Generator - Challenge #3 in the U of MN Bootcamp

## Built With
* JavaScript

## Acceptance Criteria
* When you click the button to generate a password, you are presented with a series of prompts for password criteria
* You can select which criteria to include in the password (uppercase letters, lowercase letters, numbers, special characters) 
* You are prompted for the length you want the password to be; at least 8 characters and no more than 128 characters
* You are prompted for each criteria type to confirm if you want to include the criteria in the password
* After entering each prompt the input is validated and at least one character type should be selected
* When all the prompts are answered a password is generated that matches the selected criteria
* When the password is generated  it is either displayed in an alert or written to the page


## Screenshot of the Application
![Screenshot (4)](https://user-images.githubusercontent.com/90292697/139491691-29bd5806-a772-4e3c-8235-49eece99dbdb.png)

![Screenshot (5)](https://user-images.githubusercontent.com/90292697/139491704-e2703500-3260-4cdc-b1bf-a5a2b674cae9.png)


## Git Repository
https://github.com/mbahl1670/ch3-passwordGenerator-mjb

## Website
https://mbahl1670.github.io/ch3-passwordGenerator-mjb/


## How this was accomplished
* Wrote psuedocode breaking down each step of how the password generator would work
* Created a function for each step of the password generation
* Created askCriteria(), which asks for password length (only allowing a number between 8-128 to be entered) and then yes/no questions regarding each criteria
* Created a function to validate that the user has included at least one character type for their password
* Created a function that will generate a random character based off the criteria entered in by the user
* Put the character creation function in a for loop that will generate a number of characters that matches the user's chosen password length
* Each generated character is then stored in an array, which is then printed out on the screen as a string
