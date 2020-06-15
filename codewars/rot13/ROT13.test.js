const { rot13 } = require('./ROT13');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('ROT13', () => {
    it('should decipher the strings', () => {
        expect(rot13('Ubj pna lbh gryy na rkgebireg sebz na vagebireg ng AFN?'))
            .to.equal('How can you tell an extrovert from an introvert at NSA?');
        expect(rot13('Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl\'f fubrf.'))
            .to.equal('In the elevators, the extrovert looks at the OTHER guy\'s shoes.')
    });
});
