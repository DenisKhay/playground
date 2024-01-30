function evalRPN(tokens: string[]): number {
    const operators = /^[*\-+\/]$/;
    for(let i = 0; i<tokens.length; i++) {
        const token = tokens[i];
        if(operators.test(token)) {
            const operand1 = tokens[i-2];
            const operand2 = tokens[i-1];
            const operator = token;
            let value = eval(`(${operand1})${operator}(${operand2})`);
            if(operator === '/') {
                value = value > 0 ? Math.floor(value) : Math.ceil(value);
            }
            tokens.splice(i-2,3, value);
            i=i-2;
        }
    }
    return Number(tokens[0])
}
const d = evalRPN(["4","-2","/","2","-3","-","-"]);
console.log('RESULT', d)

// ["10","6",["9","3","+"],"-11","*","/","*","17","+","5","+"]
// ["10","6",[[12],"-11","*"],"/","*","17","+","5","+"]
// ["10",["6",[-132],"/"],"*","17","+","5","+"]
