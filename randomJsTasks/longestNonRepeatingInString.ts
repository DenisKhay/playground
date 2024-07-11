
const longestNonRepeatingInString = (str: string) => {
    const symbols: Record<string, number> = {};
    let longest = '';
    for(let i = 0; i < str.length; i++) {
        const symbol = str[i];
        if(symbols[symbol] == null) {
            symbols[symbol] = i;
        } else {
            const current = str.slice(symbols[symbol], i)
            if(longest.length < current.length) {
                longest = current;
            }

        }
    }
}

// leislvasndorgel
