function rot13(str) {
    const isLowerCaseChar = (char) => /[a-z]/.test(char);
    const isUpperCaseChar = (char) => /[A-Z]/.test(char);

    const lowerCaseRange = ['a'.charCodeAt(),'z'.charCodeAt()];
    const upperCaseRange = ['A'.charCodeAt(), 'Z'.charCodeAt()];

    const deciphered = str.split('').map((sym) => {
        let s = sym;
        const charCode = (sym || ' ').charCodeAt();
        const range = isLowerCaseChar(sym) ?
            lowerCaseRange : isUpperCaseChar(sym) ?
                upperCaseRange : void 0;
        if(!range) {
            return sym;
        }
        const newCharCode = shiftWithinRange(charCode - 13, lowerCaseRange);
        s = String.fromCharCode(newCharCode);
        return s;
    });

    return deciphered;
}

function shiftWithinRange(number, [min, max]) {
    // if value is lesser
    if(typeof number !== 'number' || isNaN(number) || !isFinite(number)) {
        throw new Error('Inappropriate value');
    }
    const range = max - min;
    const difMinAndNumber = min - number;
    if(number < min) {
        const diff = max - (difMinAndNumber % range) + 1;
        return diff;
    }
    if(number > min && number < max) {
        return number;
    }
    return difMinAndNumber % range + min + 1;
}

module.exports = {
    shiftWithinRange,
    rot13,
}