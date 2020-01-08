function findRoman(val) {
    const map = new Map([[1, 'I'], [5, 'V'], [10, 'X'], [50, 'L'], [100, 'C'], [500, 'D'], [1000, 'M']]);
    // 1234
    let num = '';
    let first = 10;
    let second = 5;
    let third = 1;

    let am = Math.floor((val % first) / third) * third;

    if(am + third === second) {
        num += map.get(third) + map.get(second)
    } else if(am > second) {

    } else {
        num = new Array(am / third).fill(map.get(third)).join('');
    }

    first = 100;
    second = 50;
    third = 10;

    am = Math.floor((val % first) / third) * third;

    if(am + third === second) {
        num += map.get(third) + map.get(second)
    } else {
        num = new Array(am / third).fill(map.get(third)).join('');
    }
}
