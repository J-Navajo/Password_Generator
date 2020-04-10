let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let symbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "?", ".", "+"];

let generatePassword = [];
let allPasswordArray = [];

// creating the onclick by getting the selector (id, class, tag)
// document.querySelector("#gener bate")
var passwordLength=0;
var lowercaseValue=false;
var uppercaseValue=false;
var specialCharactersValue=false;
var numbersValue=false;

// creating the onclick
document.getElementById("generate").addEventListener("click", function(){
    passwordLength = prompt("What length do you want your password?");
    passwordLength = parseInt(passwordLength);
    

// we want password length to be higher than 8 but less than 128 characters
//  && = "and"
if (passwordLength >= 8 && passwordLength <= 128) {
    lowercaseValue = confirm("Do you want lowercase letters in your password?");
    console.log("lowercaseValue: ", lowercaseValue)
    uppercaseValue = confirm("Do you want uppercase letters?");
    console.log("uppercase: ", uppercaseValue);
    numbersValue = confirm("Do you want numbers in your password?");
    console.log("numbers: ", numbersValue)
    specialCharactersValue = confirm("Do you want special characters?");
    console.log("special symbols: ", specialCharactersValue)
    
    
    console.log("password length: " + passwordLength)
  start()
}
else {
    alert("invalid entry");
}

});



function randomize(Arraylength) {
    var i = Math.floor(Math.random() * Arraylength)
    return i;
}


function start() {
    generatePassword = [];
    allPasswordArray = [];
var characterValue = "" 
var randomizeIndex = 0

    var countSelection = 0;
 
    if (lowercaseValue === true ) {
        randomizeIndex = randomize(lowercase.length)
        characterValue = lowercase[randomizeIndex]

        generatePassword.push(characterValue)

         allPasswordArray = [...lowercase]
         countSelection++
    }
    if (uppercaseValue === true) {
        randomizeIndex = randomize(uppercase.length)
        characterValue = uppercase[randomizeIndex]

        generatePassword.push(characterValue)

        allPasswordArray = [...allPasswordArray ,...uppercase]

        countSelection++
    }
    if (numbersValue === true) {
        randomizeIndex = randomize(numbers.length)
        characterValue = numbers[randomizeIndex]

        generatePassword.push(characterValue)
        allPasswordArray = [...allPasswordArray, ...numbers]
        countSelection++
    }
    if (specialCharactersValue === true) {
        randomizeIndex = randomize(symbols.length)
        characterValue = symbols[randomizeIndex]

        generatePassword.push(characterValue)

        allPasswordArray = [...allPasswordArray, ...symbols]
        countSelection++
    }

    
    passwordLength = passwordLength-countSelection

    for (let i = 0; i < passwordLength; i++) {
        randomizeIndex = randomize(allPasswordArray.length)
        generatePassword.push(allPasswordArray[randomizeIndex])
    }

    document.getElementById("password").value = generatePassword.join("")

   

}