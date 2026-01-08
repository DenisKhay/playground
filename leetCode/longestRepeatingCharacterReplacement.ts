function characterReplacement(s: string, k: number): number {
    if(s.length < 2) return s.length;
    if(s.length <= (k + 1)) return s.length;

    let left = 0;
    let sym = left;
    let best = 0;
    let skip = 0;

    for(let right = 0; right < s.length; right++) {
        const cs = s[right];
        if(cs !== s[sym]) skip++
        while (skip > k) {
            if(s[sym] !== s[left]) skip--;
            left++;
        }
        best = Math.max(best, right - left + 1);
    }
};

const d = characterReplacement('ABCDE', 1);

console.log('ddd', d);

