//https://leetcode.com/problems/running-sum-of-1d-array/

function runningSum(nums: number[]): number[] {
    for(let i = 1; i<nums.length; i++){
        nums[i] = nums[i-1] + nums[i]
    }
    return nums
};