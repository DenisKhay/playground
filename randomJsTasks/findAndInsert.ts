function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    if(nums[start] >= target) {
        return 0
    }
    if(nums[end] === target) {
        return end;
    }
    if(nums[end] < target) {
        return end + 1;
    }
    while((end - start) !== 1) {
        const middle = start + Math.ceil((end - start) / 2)
        if(nums[middle] === target) {
            return middle;
        }
        if(nums[middle] > target) {
            end = middle;
        } else {
            start = middle
        }
    }
    return start + 1;
};

function searchInsertR(nums: number[], target: number): number {
    const recursive = (nums: number[], target: number, startIdx: number, endIdx: number): number => {
        if((endIdx - startIdx) === 1) {
            return startIdx + 1;
        }

        const middle = startIdx + Math.ceil((endIdx - startIdx) / 2);

        if(nums[middle] === target) {
            return middle;
        }
        if(nums[middle] > target) {
            return recursive(nums, target, startIdx, middle);
        } else {
            return recursive(nums, target, middle, endIdx);
        }
    }
    const startIdx = 0;
    const endIdx = nums.length - 1;
    if(nums[startIdx] >= target) {
        return 0;
    }
    if(nums[endIdx] < target) {
        return endIdx + 1;
    }
    if(nums[endIdx] === target) {
        return endIdx;
    }

    return recursive(nums, target, startIdx, endIdx)
};

const arr = [2,7,8,9,10];
const target = 9;
const d = searchInsertR(arr, target)
console.log('d', d);
