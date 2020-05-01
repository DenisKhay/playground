const validate = require('./nhs-validator');
/**
 * @description
 * just generates valid nhs numbers.
 * Despite of a bit ugly approach it works relatively fast & very stable - fits for testing purposes
 * @param howMuchToGenerate
 * @returns {[]}
 */
const generate = (howMuchToGenerate = 1) => {
    const numbers = [];
    while(howMuchToGenerate--) {
        let number;
        let count = 1000000;
        do{
            number = rand(1000000000, 9999999999);
            count--;
        } while((!validate(number)) && count);
        if(count === 0 || numbers.includes(number)) {
            howMuchToGenerate++
        } else {
            numbers.push(number);
        }
    }
    return numbers;
}

function rand(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

module.exports = {
    one: () => generate()[0],
    few: (howMuch) => generate(howMuch),
}