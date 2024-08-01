let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`", "@"]

let passElOne = document.getElementById("pass-el-one");
let passElTwo = document.getElementById("pass-el-two");
let passElThree = document.getElementById("pass-el-three");
let passElFour = document.getElementById("pass-el-four");
let generateBtn = document.getElementById("generate");
let lengthValue = document.getElementById("length-value");

function randomCharacter() {
    let randomNumber = Math.floor(Math.random() * characters.length);
    return characters[randomNumber];
}

function setPassLength() {
    let inputValue = lengthValue.value;
    console.log(inputValue);

    if (inputValue === ""){
        return 12;
    }
    return inputValue;
}

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++){
        password += randomCharacter();
    }
    return password;
}

function renderPassword() {
    passElOne.textContent = '';
    passElTwo.textContent = '';
    passElThree.textContent = '';
    passElFour.textContent = '';
    
    let length = setPassLength();
    passElOne.textContent += generatePassword(length);
    passElTwo.textContent += generatePassword(length);
    passElThree.textContent += generatePassword(length);
    passElFour.textContent += generatePassword(length);
}

function copyToClipboard(e) {
    let password = e.target;
    navigator.clipboard.writeText(password.textContent).then(res=>{
        console.log("Input data copied to clipboard successfully");
    })
}

passElOne.addEventListener("click", copyToClipboard);
passElTwo.addEventListener("click", copyToClipboard);
passElThree.addEventListener("click", copyToClipboard);
passElFour.addEventListener("click", copyToClipboard);
generateBtn.addEventListener("click", renderPassword);
