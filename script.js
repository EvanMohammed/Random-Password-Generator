// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var el_down = document.getElementById("#password");





// making a function to add conditions

function generatePassword() {
  // setting variables for password characters individually 
  var pass = '';
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharacters = '!@#$%^&*-=_\|<>,.?`~';
  var numbers = '0123456789';
  let genPass = '';




 // asking the user wether they want their password to have lower case letters
  var lowerCaseWindow = confirm("Do you want to include lower case letter?")
  if (lowerCaseWindow === true) {
    pass += lowerCaseLetters;
 // asking the user wether they want their password to have upper case letters
}
  var upperCaseWindow = confirm("Do you want to include upper case letter?")
  if (upperCaseWindow === true) {
    pass += upperCaseLetters;
  }
   // asking the user wether they want their password to have numbers

  var numberWindow = confirm("Do you want to include numbers?")
  if (numberWindow === true) {
    pass += numbers;
  }
   // asking the user wether they want their password to have special characters

  var specialCharacterWindow = confirm("Do you want to include special character?")
  if (specialCharacterWindow === true) {
    pass += specialCharacters;
  }

  // asking the user how many characters he wants for his password 
  var userInput = parseInt(prompt("How many characters your password should be?"))
  for (i = 0; i < userInput ; i++) {
    let char = Math.floor(Math.random() * pass.length);
    genPass += pass.charAt(char)
  }

  return genPass;
}







/* Function to generate combination of password */

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
