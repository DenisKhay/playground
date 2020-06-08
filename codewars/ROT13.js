function rot13(str) {
    const isLowerCaseChar = (char) => /[a-z]/.test(char);
    const isUpperCaseChar = (char) => /[A-Z]/.test(char);

    const deciphered = str.split('').map((sym) => {
        let s = sym;
        if(isLowerCaseChar(s)) {

        }

        if(isUpperCaseChar(s)) {

        }
        return s;
    });

    return str;
}

function shiftWithinRange(number, [min, max], shift) {
    // if value is lesser
    // if value is bigger
}

module.exports = {
    shiftWithinRange,
}