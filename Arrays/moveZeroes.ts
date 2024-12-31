//https://leetcode.com/problems/move-zeroes/

function moveZeroes(nums: number[]): void {
    let countOfZeros = 0
    for(let i=0;i<nums.length; i++){
        if(nums[i] === 0){
            countOfZeros++;
        }
        else{
            const temp = nums[i];
            nums[i] = 0;
            nums[i-countOfZeros] = temp
        }
    }
};