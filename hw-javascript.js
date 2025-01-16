
function checkPassword (password) {
    if (password.length < 8) {
        return "Weak";
    }
let hasDigit = false;
for (let i = 0; i<password.length; i++) {
    if (!isNaN(password[i])) {
        hasDigit=true;
        break;
    }
}
if (!hasDigit) {
    return "Weak";
}
let hasUpperCase = false;
let hasLowerCase = false;

for (let i=0; i<password.length; i++) {
    if (password[i]===password[i].toUpperCase() && isNaN(password[i])) {
hasUpperCase=true;
    }
    if (password[i]===password[i].toLowerCase() && isNaN(password[i])) {
        hasLowerCase=true;
}
}
if (!hasUpperCase || !hasLowerCase) {
    return "Weak";
}
return "Strong";
}
console.log(checkPassword("password1"));
console.log(checkPassword("Password1"));