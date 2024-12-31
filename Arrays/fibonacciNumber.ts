
// https://leetcode.com/problems/fibonacci-number/

function fib(n: number): number {
    let nums = [];
    nums.push(0);
    nums.push(1)
    for(let i = 2; i<= n; i++){
        nums.push(nums[i-1] + nums[i-2])
    }

    return nums[n];
};