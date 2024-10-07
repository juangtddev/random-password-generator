const passwordInput = document.getElementById("password");
const passwordLength = 12;
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const specialSymbols = "!@#$%^&*()_+~`|}{[]:;?><";
const allCharacters = upperCaseLetters + lowerCaseLetters + digits + specialSymbols;

function generatePassword() {
    let password = "";

    // Ensure at least one character of each type is included
    password += getRandomCharacter(upperCaseLetters);
    password += getRandomCharacter(lowerCaseLetters);
    password += getRandomCharacter(digits);
    password += getRandomCharacter(specialSymbols);

    // Fill the rest of the password with random characters from all categories
    while (password.length < passwordLength) {
        password += getRandomCharacter(allCharacters);
    }

    passwordInput.value = shufflePassword(password); // Shuffle the password to randomize order
}

function getRandomCharacter(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
}

function shufflePassword(password) {
    return password.split('').sort(() => 0.5 - Math.random()).join('');
}

function copyPassword() {
    navigator.clipboard.writeText(passwordInput.value)
        .then(() => alert("Password copied!"))
        .catch(err => console.error("Failed to copy password: ", err));
}
