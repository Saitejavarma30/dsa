//https://leetcode.com/problems/pascals-triangle/description/

function generate(numRows: number): number[][] {
    const nums = []
    const base = [1];
    nums.push(base)
    for(let i = 1; i<numRows; i++){
        if(i === 1){
            nums.push([1,1])
        }
        else{
            const arr = [1]
            for(let j = 1; j<i; j++){
                arr.push(nums[i-1][j-1] + nums[i-1][j])
            }
            arr.push(1)
            nums.push(arr)
        }
    }
    return nums;
};