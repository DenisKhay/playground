import { flatWithRecursion } from './flatPolyfill';

describe('tests of flat polyfills', () => {
    it('should flatten array (recursive function)', () => {
        //todo - finish the test
        const someArr = [1,2,[],3,4,[[5, undefined,[], null],'foo']];
        expect(flatWithRecursion.call(someArr,2)).toEqual([1,2,3,4,5,undefined,[],null,'foo']);
        expect(flatWithRecursion.call(someArr,Infinity)).toEqual([1,2,3,4,5,undefined,null,'foo']);
        expect(flatWithRecursion.call(someArr)).toEqual([1,2,3,4,[5,undefined,[],null],'foo']);
    })
})
