const passwordFinal = document.getElementById("passwordarea");
var charSets = [];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let symbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "?", ".", "+"];


let getpassword = function () {
    var number = parseInt(prompt("How many characters would you like in your password?"));
    // choices();
    if (number < 8 || number > 130) {
        alert("Input must be higher than 7.")
        getpassword();
    }
    else {
        let special = confirm("Click OK to include special characters.");
        console.log("Special Characters", special);
        if(special) {
            charSets.push(symbols);
        }
        console.log(charSets);

        let num = confirm("Click OK to include numbers.");
        console.log("Yes to Numbers", num);
        if (num){
            charSets.push(numbers);
        }
        console.log(charSets);

        let getlowercase = confirm("Click OK to include lowercase letters");
        console.log("Yes to lowercase letters", getlowercase);
        if (getlowercase) {
            charSets.push(lowercase);
        }
        console.log(charSets);

        const getuppercase = confirm("Click OK to include UPPERCASE letters.");
        console.log("Yes to uppercase letters", getuppercase);
        if (getuppercase) {
            charSets.push(uppercase);
        }
        console.log(charSets);
        Selectfrom(number, special, num, getlowercase, getuppercase);
    }
}



function choices() {
    // getpassword()
    // console.log("Your input is " + number);


}
function Selectfrom(number, special, num, lowercase, uppercase) {
    let generatePword = ""

    for (let i = 0; i < number; i++) {
        if (special) {
            generatePword = generatePword + symbols
            special = false
            
        }

        else if (num) {
            generatePword = generatePword + numbers
            num = false
            num = true
        }

        else if (lowercase) {
            generatePword = generatePword + lowercase
            getlowercase = false
        }

        else if (getuppercase) {
            generatePword = generatePword + uppercase
            getuppercase = false
            getuppercase = true

            

        }

    }
    console.log(generatePword)

    passwordFinal.textContent = generatePword
}
for (let i = 0; i < number; i++) { 
for (let j = 0; j < charSets[i].length; j++) {
    const innerElement = charSets[i][j];
    console.log(innerElement)
}
}