//https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    let count = 1;
    let majorityElement = nums[0]
    for(let i=0; i<nums.length; i++){
        if(nums[i] === majorityElement){
            count++
        }
        else{
            count--
        }

        if(count<0){
            count = 1;
            majorityElement = nums[i]
        }
    }
    return majorityElement
};