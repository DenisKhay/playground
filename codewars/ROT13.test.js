const { shiftWithinRange } = require('./ROT13');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('ROT13', () => {
    it('should', () => {
        expect(shiftWithinRange(21, [22, 24])).to.equal(24);
        expect(shiftWithinRange(28, [29, 49])).to.equal(49);
        expect(shiftWithinRange(50, [100, 151])).to.equal(102);
        expect(shiftWithinRange(50, [40, 60])).to.equal(50);
        expect(shiftWithinRange(61, [40, 60])).to.equal(40);
    });
});

