// https://leetcode.com/problems/squares-of-a-sorted-array/description/

function sortedSquares(nums: number[]): number[] {
    let ans = [];
    let start = 0;
    let end = nums.length-1
    while(start<=end){
        const startSqr = nums[start]*nums[start]
        const endSqr =  nums[end]*nums[end]
        if(startSqr > endSqr){
            ans.push(startSqr)
            start++
        }
        else{
            ans.push(endSqr)
            end--
        }
    }
    ans.reverse()
    return ans

}