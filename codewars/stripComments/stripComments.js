function solution(input, markers) {
    return markers.reduce((str, marker) => {
        const regexp = new RegExp(`\\s*\\${marker}.*?(\\n|$)`, 'g');
        const st = str.replace(regexp, '$1');
        return st;
    }, input)
}

const here = solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])

console.log('done', here);