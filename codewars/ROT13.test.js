const { shiftWithinRange } = require('./ROT13');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('ROT13', () => {
    it('should', () => {
        expect(shiftWithinRange(23, [22, 40], 3)).to.equal(26);
        expect(shiftWithinRange(46, [22, 40], 3)).to.equal(26);
    });
});

