// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(nums: number[]): number {
    let uniqueCount = 1
    for(let i=1; i<nums.length; i++){
        if(nums[i-1] !== nums[i]){
            nums[uniqueCount] =  nums[i]
            uniqueCount++
        }
    }
    return uniqueCount
};