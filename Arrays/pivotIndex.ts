//https://leetcode.com/problems/find-pivot-index/description/

function pivotIndex(nums: number[]): number {
    let sum = 0;
    let leftSum = 0;
    for(let i=0;i<nums.length; i++){
        sum+=nums[i]
    }
    for(let i=0;i<nums.length;i++){
        sum -= nums[i]
        if(sum === leftSum) return i
        leftSum +=nums[i]
    }
    return -1
}