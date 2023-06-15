type Board = string[][];
type Coord = {x: number, y: number};

function main(board: Board, word: string): boolean {
    let cursor = 0;
    let found = false;
    const wordReversed = word.split('').reverse().join('');
    for(let y = 0; y < board.length; y++) {
        const line = board[y];
        for(let x = 0; x < line.length; x++) {
            const sym = line[x];
            if(sym === word[0]) {
                debugger;
                if(seek({x, y}, word.slice(1), board, [`${x}${y}`])) {
                    return true;
                }
            } else if (sym === wordReversed[0]) {
                debugger;
                if(seek({x, y}, wordReversed.slice(1), board, [`${x}${y}`])) {
                    return true;
                }
            }
        }
    }
    return false;
}

const isEmpty = (o: any) => !Object.keys(o).length;

const seek = (coord: Coord, word: string, board: Board, used: string[]): boolean => {
    const symbolToLookFor = word[0];
    if(!symbolToLookFor) {
        return false;
    }
    const around = lookAround(coord, board, symbolToLookFor);
    if(isEmpty(around)) {
        return false;
    }
    for (let [key, coord] of Object.entries(around)) {
        if(used.includes(`${coord.x}${coord.y}`)) {
            continue;
        }
        if(word.length === 1) {
            return true;
        }
        if(seek(coord, word.slice(1), board, [...used, `${coord.x}${coord.y}`])) {
            return true;
        }
    }
    return false;
}

const lookAround = ({x, y}: Coord, board: Board, symbol: string): Partial<Record<'left' | 'top' | 'bottom' | 'right', Coord>> => {
    const top = board[y-1]?.[x] === symbol;
    const left = board[y]?.[x-1] === symbol;
    const bottom = board[y+1]?.[x] === symbol;
    const right = board[y]?.[x+1] === symbol;
    return {
        ...(top && {top: {x, y: y-1}}),
        ...(left && {left: {x: x-1, y}}),
        ...(bottom && {bottom: {x, y: y+1}}),
        ...(right && {right: {x: x+1, y}})
    };
}
const board: Board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
];
const word = "ABCCED";

main(board, word);
