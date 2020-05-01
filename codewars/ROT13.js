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
    if(number < min || number > max) {
        return number;
    }
    number = number + shift;
    if(number <= max) {
        return number;
    }
    const diff = (number - min) % (max - min);
    return min + diff;
}

module.exports = {
    shiftWithinRange,
}