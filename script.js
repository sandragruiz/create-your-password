// Variables //
var charLength = 8;
var charChoice

var specialChar = ["!", ",", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "_"];
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberChar = ["1","2","3","4","5","6","7","8","9","0"];


// Assignment Code //

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = givePrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword; 
  }

  else {
    passwordText.value = "";
  }
}

// Generate password function with for loop //

function generatePassword () {
  var password = "";
  for(var i = 0; i < charLength; i++) {
    var randomChars = Math.floor(Math.random()*charChoice.length);
    password = password + charChoice[randomChars];
  }
  return password;
}

// Prompt questions and conditions //

function givePrompts() {
  charChoice=[];
  charLength = parseInt(prompt("How many characters do you want your password to be? (8-128 characters allowed)"));
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Character length not acceptable. Please try again.");
    return false;
  }

  if (confirm("Do you wish to include lowercase letters?")) {
    charChoice = charChoice.concat(lowercaseChar);
  }

  if (confirm("Do you wish to include uppercase letters?")) {
    charChoice = charChoice.concat(uppercaseChar);
  }

  if (confirm("Do you wish to include special characters?")) {
    charChoice = charChoice.concat(specialChar);
  }

  if (confirm("Do you wish to include numbers?")) {
    charChoice = charChoice.concat(numberChar);
  }
  return true;
}