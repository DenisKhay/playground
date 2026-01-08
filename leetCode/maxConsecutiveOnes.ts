function longestOnes(nums: number[], k: number): number {
    if(nums.length < 2) return nums.length;
    let longest = 0;
    let left = 0;
    let zeros = 0;
    for(let right = 0; right < nums.length; right++) {
        if(nums[right] === 0) zeros++

        while(zeros > k) {
            if(nums[left] === 0) zeros--;
            left++;
        }
        
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
};

const a = [0,0,1,1];
const k = 1;

const longest = longestOnes(a, k);