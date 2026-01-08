'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: any = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function shapeFits(field: number[][], shape: number[][], offset: {x: number, y: number}) {
    const fieldSize = {
        x: field[0].length,
        y: field.length,
    };
    const shapeSize = {
        x: shape.reduce((largestLength, row) => {
            const trueRowSize = row[row.length - 1] + 1;
            return trueRowSize > largestLength ? trueRowSize : largestLength;
        }, 0),
        y: shape.length,
    };
    if(fieldSize.x < (shapeSize.x + offset.x) || fieldSize.y < (shapeSize.y + offset.y)) {
        return false;
    }

    return true;
}
function getFigureValuesByCoord(x: number, y: number, shape: number[][], field: number[][]) {
    if(!shapeFits(field, shape, {x, y})) {
        return;
    }

    const values: number[][] = [];
    for(let i = 0; i < shape.length; i++) {
        const row = shape[i];
        const rowValues: number[] = [];
        values.push(rowValues);
        for(let j = 0; j < row.length; j++) {
            const indexFromFigure = row[j];
            const trueX = x + indexFromFigure;
            const trueY = y + i;
            const value = field[trueY][trueX];
            rowValues.push(value)
        }
    }
    return values;
}
function getSum(arr: number[][] | undefined): number | undefined {
    if(arr == null) {
        return;
    }
    return ([] as number[]).concat(...arr).reduce<number>((sum, item) => item + sum, 0);
}
function getLargestShapeSumFromField(shape: number[][], field: number[][]) {

    let x = 0;
    let y = 0;
    let largest = -Infinity;
    while(true) {
        let largestCandidate = getSum(getFigureValuesByCoord(x,y,shape,field));
        if(typeof largestCandidate === 'undefined') {
            x = 0;
            y++;
            largestCandidate = getSum(getFigureValuesByCoord(x,y,shape,field));
            if(typeof largestCandidate === 'undefined') {
                break;
            }
        }
        largest = largestCandidate > largest ? largestCandidate : largest;
        x++;
    }
    return largest;
}
function main() {

    let field: number[][] = Array(6);
    const shape = [
        [0,1,2],
        [1],
        [0,1,2],
    ];
    for (let i = 0; i < 6; i++) {
        field[i] = readLine().replace(/\s+$/g, '').split(' ').map((arrTemp: string)=> parseInt(arrTemp, 10));
    }

    const value = getLargestShapeSumFromField(shape, field);

    console.log(value)
}
