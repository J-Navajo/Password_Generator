var charSets = [];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let symbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "?", ".", "+"];


let many = function() {
    const number = parseInt(prompt("How many characters would you like in your password?"));
    choices();
}



function choices() {
console.log("Your input is " + many);
if (many < 8 || many > 130) {
    alert("Input must be higher than 7.")
}
else {
    let special = confirm("Click OK to include special characters.");
    console.log("Special Characters", special);
    if(special) {
        charSets.push(symbols);
    }
    console.log(charSets);

    let numbers = confirm("Click OK to include numbers.");
    console.log("Yes to Numbers", numbers);
    if (numbers){
        charSets.push(numbers);
    }
    console.log(charSets);

    let getlowercase = confirm("Click OK to include lowercase letters");
    console.log("Yes to lowercase letters", getlowercase);
    if (getlowercase) {
        charSets.push(getlowercase);
    }
    console.log(charSets);

    const getuppercase = confirm("Click OK to include UPPERCASE letters.");
    console.log("Yes to uppercase letters", getuppercase);
    if (getuppercase) {
        charSets.push(getuppercase);
    }
    console.log(charSets);
    Selectfrom(many, special, numbers, getlowercase, getuppercase);
}
}
function Selectfrom(many, special, numbers, lowercase, uppercase) {
    let generatePword = ""

    for (const i = 0; i < many; i++) {
        if (special) {
            generatePword = generatePword + special
            console.log(generatePword)

        }
    }
}

