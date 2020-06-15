const { regex } = require('./index');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Detection of binary divisible by 3', () => {
    it('should be able to detect binary numbers which are divisible by 3', () => {
        expect(regex.test(' 0')).to.be.false;
        expect(regex.test('abc')).to.be.false;
        expect(regex.test('000')).to.be.true;
        expect(regex.test())
    })
})