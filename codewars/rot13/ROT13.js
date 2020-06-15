function rot13(str) {
    const isLowerCaseChar = (char) => /[a-z]/.test(char);
    const isUpperCaseChar = (char) => /[A-Z]/.test(char);

    const lowerCaseRange = ['abcdefghijklmnopqrstuvwxyz', 'nopqrstuvwxyzabcdefghijklm'];
    const upperCaseRange = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'NOPQRSTUVWXYZABCDEFGHIJKLM'];

    const deciphered = str.split('').map((sym) => {
        let s = sym;

        const range = isLowerCaseChar(sym) ?
            lowerCaseRange : isUpperCaseChar(sym) ?
                upperCaseRange : void 0;

        if (!range) {
            return sym;
        }

        let index = range[0].indexOf(s);
        if (index !== -1) {
            s = range[1][index];
        } else {
            index = range[1].indexOf(s);
            s = range[0][index];
        }

        return s;
    });

    return deciphered.join('');
}

module.exports = {
    rot13,
};