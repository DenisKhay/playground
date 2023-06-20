
const getNextMatchAfter = (prevMatch: string | undefined, patternSymbol: '.' | string, word: string): string | false => {
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
const last = (arr: unknown[]) => arr[arr.length - 1];
function isMatch(word: string, pattern: string): boolean {

    const stack: StackData[] = [];
    const createStackTop = <T,>(d: T) => stack.push(d);
    const readStackTop = () => stack[stack.length - 1];
    const updateStackTop = <T,>(d: T) => {
        const old = stack.pop();
        stack.push({
            ...old,
            ...d,
        })
    }
    const deleteStackTop = () => stack.pop();

    const patternArr = getPattern(pattern);
    let wordCursor = 0;
    for(let i = 0; patternArr.length > i; i++) {
        const matcher = patternArr[i];
        const wildCarded = matcher.length === 2;
        const backtracked = stack.length ? (readStackTop().index === i) : false;
        const stackValue = readStackTop();
        if(backtracked) {
            const match = getNextMatchAfter(stackValue?.match, matcher[0], word.slice(stackValue.wordCursor));
            if(match !== false) {
                const cursor = stackValue.wordCursor + match.length;
                if((cursor + 1) >= word.length) {
                    return true;
                }
                // 1. if it is not end of the word
                // 2. If it is not end of the pattern - impossible for the case
                last(stack).match = match;
                wordCursor = cursor;
                i++;
            } else {
                deleteStackTop();
                if(!stack.length) {
                    return false;
                }
                i = readStackTop().index;
            }
            continue;
        }
        if(wildCarded) {
            const newStackValue: StackData = {
                match: '',
                index: i,
                wordCursor,
            }
            // if end of pattern and not end of word?
            //      we should:
            //          match the last pattern with the rest of the word
            //          return true else false
            // if end of pattern and end of word? (meaning cursor points on undefined)
            //     return true
            // if end of word and end of pattern?
            // if end of word and not end of pattern?

        } else {

        }
    }
    return false;
}

const matched = isMatch('aab', 'c*a*b*cc*.');
console.log('matched', matched);
