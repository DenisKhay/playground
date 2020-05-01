const { shiftWithinRange } = require('./ROT13');
const describe = require('mocha').describe;
const expect = require('chai').expect;

describe('ROT13', () => {
    it('should', () => {
        expect(shiftWithinRange(23, [22, 40], 3)).to.equal(26);
        expect(shiftWithinRange(23, [22, 40], 3)).to.equal(26);
    });
});

