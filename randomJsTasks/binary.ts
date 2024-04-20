let binary = -1;
//
// global.setInterval(() => {
//     binary++;
//     console.log(binary, '->', binary.toString(2));
// }, 10)
// 3 = 2+1
// 4 = 4
// 5 = 4+1
// 6 = 4+2
// 101001 = 32 + 8 + 1
// 2 4 8 16 32 64 128 256
// 2 3 4 5  6  7  8   9
//
// 101000101
// 256 + 64 + 4 + 1 = 325
// 1100010010010
// 2 + 16 + 128 + 2048 + 4096 = 6190
const x = 2 + 16 + 128 + 2048 + 4096
console.log('x', x, x.toString(2))


// 1010010
// 1000111 // 111 - 1 + 2 + 4 = 7 + 2 = 9 // 8 + 1 === 1001
// 101

// 1001 = 1 + 8
// 1100 = 4 + 8
// = 10101 = 9 + 12 = 21 - 10101
// 111 + 111 = 1110
// 1+2+4
// 14 = 1110

// 1001 = 1 + 8 = 9
// 1011 = 1 + 2 + 8 = 11
// 10100 = 20
// 10100

// 10101
//   101
// 11010

// 10000
//  1010
// 11010

// 10101 = 1 + 4 + 16 = 21
//  1010 = 2 + 8 = 10
// 11111 = 31? + 1 + 2 + 4 + 8 + 16

// 11101 = 1 + 4 + 8 + 16 = 29
//  1010 = 2 + 8 = 10
//100111 = 1 + 2 + 4 + 32

//  11111 = 1 + 2 + 4 + 8 + 16 = 31
//   1011 = 1 + 2 + 8 = 11
// 101010
// 101010

// 1110101 = 1 + 4 + 16 + 32 + 64 = 117
//  101111 = 1 + 2 + 4 + 8 + 32 = 47 /// 100
// 164 = 128 + 32 + 4 = 10100100
// 1) 1 + 1 = 10  = 0 ? - 1 | same order = increase bits
// 2) 10 + 10 = 100 = 0 ? - 1 | initially not same order, but prev + now = same order = increase of bits
// 3) 100 + 100 + 100 = 1100 = 101 + 111 = (1+4) + (1+2+4) = 5 + 7 = 12 = 8 + 4 = 1100 // 1 ? - 1 | same order = increase of bits + prev
// 4) 1000 + 1100 = 10100 // 0 ? - 1 | initially not same order, but prev + now = same order = increase of bits
// 5) 10000 + 10100 = 100100 // 0 ? - 1 | initially not same order, but prev + now = same order = increase of bits
// 6) 100_000 + 100_000 + 100100 = 1100100 // 1 ? - 1 same order = increase of bits + prev
// 7 1000000 + 1100100 = 10100100 // 0 ? - 1 | initially not same order, but prev + now = same order = increase of bits


// 1) when 1 & 1 and 0 -             result place - 0, for next - 1
// 2) when 1 & 1 and 1 -             result place = 1, for next - 1
// 3) when (1 & 0) | (0 & 1) and 0 - result place = 1, for next - 0
// 4) when (1 & 0) | (0 & 1) and 1 - result place = 0, for next - 1

// 1111101100 // 4 8 32 64 128 256 512
//    1010010 // 2 16 64
const addBinary = (a: string, b: string): string => {

    let i = 0;
    const longest = a.length > b.length ? a : b;
    let sum = '';
    let surplus = false;
    while(longest[(i++)] || surplus) {
        const bit1 = a[a.length - i] ?? '0';
        const bit2 = b[b.length - i] ?? '0';
        const bits = bit1 + bit2;
        const onlyOneOfIsFilled = bits === '01' || bits === '10';
        const bothFilled = bits === '11';
        const bothZero = bits === '00';

        switch (true) {
            case bothZero && !surplus:
                sum = '0' + sum;
                break;
            case bothZero && surplus:
                sum = '1' + sum;
                surplus = false;
                break;
            case onlyOneOfIsFilled && !surplus:
                sum = '1' + sum;
                break;
            case onlyOneOfIsFilled && surplus:
                sum = '0' + sum;
                break;
            case bothFilled && !surplus:
                sum = '0' + sum;
                surplus = true;
                break;
            case bothFilled && surplus:
                sum = '1' + sum;
                break;
        }




        if(onlyOneOfIsFilled && !surplus) {
            sum = '1' + sum;
            surplus = false;
            continue;
        }
        if(onlyOneOfIsFilled && surplus) {
            sum = '0' + sum;
            continue;
        }
        if(bothFilled && !surplus) {
            sum = '0' + sum;
            surplus = true;
            continue;
        }
        if(bothFilled && surplus) {
            sum = '1' + sum;
            continue;
        }
        if(surplus) {
            sum = '1' + sum;
            surplus = false;
        } else {
            sum = '0' + sum;
        }
    }
    return sum;
}
const first = '100101011001';
const second = '111110001';
const verified = {[first]: parseInt(first, 2), [second]: parseInt(second, 2), sum: (parseInt(first, 2) + parseInt(second, 2)).toString(2)};
console.log('check', JSON.stringify(verified))
const result = addBinary(first, second);
console.log('SUM', result, 'is ok?', result === verified.sum);
