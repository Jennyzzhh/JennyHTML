// Assignment Code
var generateBtn = document.querySelector("#generate");
const characterAmountRange = document.getElementById ('characterAmountRange')
const characterAmountNumber = document.getElementById ('characterAmountNumber')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value;
  characterAmountRange.value = value;

}

// Write password to the #password input
function writePassword() {
  var chars = "0123456789"
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}


function getRandomLower() {
return String.fromCharCode()
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
