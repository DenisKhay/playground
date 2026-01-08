export function lengthOfLongestSubstring(s: string): number {
   
    if(s.length < 1) {
        return s.length;
    }
    let left = 0;
    let right = 1;
    let longest = 1;
    
    while(s[right]) {
        const idx = s.slice(left, right).indexOf(s[right]);
        const repeats = idx !== -1;
        if(repeats) {
            left++;
        } else {
            longest = Math.max(longest, right - left + 1);
            right++;
        }
    }
return longest;
};

const test = "abcabcbb";

console.log('length of the longest: ', lengthOfLongestSubstring(test))