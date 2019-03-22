const arr = [1, 4, 5, 7, 8, 2, 3, 6, 9, 4, 256, 34, 1, 12, 3];
const num = 14;

// first
let nums = [];
loop:
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        for (let z = i + 1; z < arr.length; z++) {
            if ((arr[i] + arr[z]) === num) {
                nums = [[i, arr[i]], [z, arr[z]]];
                break loop;
            }
        }
    }

console.log('first results', JSON.stringify({nums}));

// second

// 1. sort
let sortedArr = arr.sort((a, b) => a - b);
console.log({sortedArr});
// 2. find x = (x + left) <= num && (x + right) >= num ? 1 : 0
//    for first -> if x + right > num ? -1 : 0
//    for last -> if x + left < num ? -1 : x + left === num ? 1 : -1
const x = find((current, i, a) => {
    const left = a[i - 1];
    const right = a[i + 1];

    // -1 - stop, not found
    //  0 - not matches, continue
    //  1 - stop, found

    // if (!left && right) {
    //     return (current + right) > num ? -1 : (current + right) < num ? 0;
    // } else if (left && right) {
    //     return (current + left) < num && (current + right) > num;
    // } else if (left && !right) {
    //     return (current + left) === num;
    // }
    // return false;



});

// 3. find y = y > num;
// 4. cut nums by i of y
