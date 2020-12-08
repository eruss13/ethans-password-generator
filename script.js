// character variable arrays list
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specChars = ["!", "@", "#", "$", "%", "^", "*", "(", ")", "_", "-", ",", ".", "?"];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function that displays the password in the textbox
function generatePassword() {

// the array for all characters selected by the user
var allCharacters = [];

// the password array
var password = [];

  // prompt for the user to enter the length of their generated password
  var charCount = prompt("Enter the length of your password. It can be anywhere from 8-128 characters");

  // makes sure the user has entered a number
  if (isNaN(charCount)) {

    return "Please enter a number between 8-128.";
  }

  // makes sure the user enters a number within the character limit
  if (charCount < 8 || charCount > 128) {

    alert("Please enter a password length from 8-128 characters.");

    return "Try again";
  }

  var upperCase = confirm("Include uppercase characters?");

  // if the user selects ok, the uppercase letters are pushed to the allCharacters array
  if (upperCase) {
    for (var i = 0; i < upCase.length; i++) {
      allCharacters.push(upCase[i]);
    }
  }

  //if "cancel" is selected by user, tells browser not to include lowercase characters.
  var lowerCase = confirm("Include lowercase characters?");

  // if the user selects ok, the lowercase letters are pushed to the allCharacters array
  if (lowerCase) {
    for (var j = 0; j < lowCase.length; j++) {
      allCharacters.push(lowCase[j]);
    }
  }

  var specialChar = confirm("Include special characters?");

  // if the user selects ok, the special characters are pushed to the allCharacters array
  if (specialChar) {
    for (var k = 0; k < specChar.length; k++) {
      allCharacters.push(specChar[k]);
    }
  }

  var numbers = confirm("Include numbers?");

   // if the user selects ok, the number characters are pushed to the allCharacters array
  if (numbers) {
    for (var m = 0; m < num.length; m++) {
      allCharacters.push(num[m]);
    }

  }
 // a for loop to make the amount entered by the user the same as the password length
  for (var f = 0; f < charCount; f++) {

// pushes all random characters accepted by the user from the allCharacters array to the final password
    password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
     }

// final password variable return
     var final = password.join("");
     return final;
  }