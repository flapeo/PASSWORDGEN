function generatePassword(){
  //TODO: your code goes here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1,2,3,4,5,6,7,8,9];
var specials = ["#", "@", "%", "$", "^", "&", "*","?", "!"];
var charactercount = prompt ("8-128 characters")
var numberchoice = confirm ("Numerals included?")
var lowerchoice = confirm ("Lowercases?")
var upperchoice = confirm ("Uppercases?")
var specialchoice = confirm ("do u want special characters in ur password")
var userentry = [];
var passwordresult = [];
/* if statements verifying how you would like ur password formated and what characters youd like */
if (numberchoice){
  passwordresult = passwordresult.concat(numbers);
}
if (upperchoice){
  passwordresult = passwordresult.concat(uppercase);
}
if (lowerchoice){
  passwordresult = passwordresult.concat(lowercase);
}
if (specialchoice){
  passwordresult = passwordresult.concat(specials);
}
for (var i = 0; i < charactercount; i++) {
       userentry.push (passwordresult[Math.floor(Math.random() * passwordresult.length)]); 
  }
console.log(passwordresult)
  return userentry.join("") ; 
}
// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
