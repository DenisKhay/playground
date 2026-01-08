function twoSum(nums: number[], target: number): number[] {
  const hash = { [nums[0]]: 0 };
  for (let i = 1; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i];
    }
    hash[nums[i]] = i;
  }

  return [];
}
