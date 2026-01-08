// Given a string s, find the length of the longest substring without repeating characters.

// Example

// Input:  "abcabcbb"
// Output: 3
// Explanation: "abc"

// Input:  "bbbbb"
// Output: 1
// Explanation: "b"

// Input:  "pwwkew"
// Output: 3
// Explanation: "wke"



function lengthOfLongestSubstring(str: string): number {
        if(str.length < 2) return str.length;
        let longest = 1;
        const chunk = [str[0]];
        for(let right = 1; right < str.length; right++) {
            while(chunk.includes(str[right])) {
                chunk.shift()
            }
            chunk.push(str[right]);
            longest = Math.max(longest, chunk.length);
        }

    return longest;
};

console.log('find', lengthOfLongestSubstring('abcabcbb'))