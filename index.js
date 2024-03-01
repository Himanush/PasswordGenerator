const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()[]{}_+-<>/-=~";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword(){

    let password = "";

    // It generates a random number from uppercase length i.e 0-25 and adds the value from each section uppercase,lowercase,numbers and sections
    //This code only gives 4 characters so to get the length of 12 we use while loop combining all characters
    // password += upperCase[Math.floor(Math.random()*upperCase.length)];
    // password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // password += numbers[Math.floor(Math.random()*numbers.length)];
    // password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length)
    {
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    //This method allows you to write text to the systems clipboard i.e temporary storage for data that user wants to copy from one place to another.
    
    navigator.clipboard.writeText(passwordBox.value);

    //This method copies the selected text to clipboard
    //it's deprecated i.e functionality is not recommended likely to br removed.
    //document.execCommand('copy');
}