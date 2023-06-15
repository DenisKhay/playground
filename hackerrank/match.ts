
const getMatchAfter = (prevMatch: string | undefined, patternSymbol: '.' | string, word: string): string | false => {
    if(typeof prevMatch === 'undefined') {
        return ''
    }
    const length = prevMatch.length;
    const nextLength = length + 1;
    if(word.length < nextLength) {
        return false;
    }
    const wordSlice = word.slice(0, nextLength);
    if(patternSymbol === '.') {
        return wordSlice;
    }
    const pattern = Array(nextLength).fill(patternSymbol).join('');
    if(pattern === wordSlice) {
        return wordSlice;
    }
    return false;
}
interface StackData {
    match: string
    index: number
    wordCursor: number
}
const getPattern = (str: string) => {
    return str.split('').reduce<string[]>((acc, item) => {
        if(item === '*') {
            acc[acc.length - 1] = (acc[acc.length - 1] + '*');
        } else {
            acc.push(item);
        }
        return acc;
    }, [])
}
function isMatch(word: string, pattern: string): boolean {

    const stack: StackData[] = [];
    const patternArr = getPattern(pattern);
    let wordCursor = 0;
    for(let i = 0; pattern.length > i; i++) {
        const ps = pattern[i];
        const hasAsterisk = pattern[i+1] === '*';
        if(hasAsterisk) {
            const lastStackValue = stack[stack.length - 1];
            const alreadyBeenHere = lastStackValue?.index === i;
            const prevMatch = alreadyBeenHere ? lastStackValue.match : undefined;
            alreadyBeenHere && stack.pop();
            const minMatch = getMatchAfter(prevMatch, ps, alreadyBeenHere ? word.slice(lastStackValue.wordCursor) : word);
            if(minMatch === false) {
                if(stack.length === 0) {
                    return false;
                } else {
                    i = stack[stack.length - 1].index - 1;
                }
            } else {
                if((wordCursor + 1) === (word.length - 1) && (i === pattern.length)) {
                    return true;
                }
                stack.push({wordCursor, index: i, match: minMatch});
                wordCursor += minMatch.length;
                i += 1;
            }
        } else {
            const matched = word[wordCursor] === ps;
            if(matched) {
                wordCursor += 1;
                const lastPatternSymbol = (i + 1) === pattern.length;
                const wordMatchingFinished = wordCursor === word.length;
                return lastPatternSymbol && wordMatchingFinished;
            } else {
                if(stack.length === 0) {
                    return false;
                } else {
                    i = stack[stack.length - 1].index - 1;
                }
            }
        }
    }
    return false;
}

const matched = isMatch('aab', 'c*a*b*');
console.log('matched', matched);
