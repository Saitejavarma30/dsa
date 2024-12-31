//https://leetcode.com/problems/merge-sorted-array/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let temp = nums1.length-1
    while(temp>=0 && (m-1>=0 || n-1>=0)){
        if((nums1[m-1] > nums2[n-1]) || n-1<0){
            console.log(nums1[m-1])
            nums1[temp] = nums1[m-1]
            temp--;
            m--;
        }else{
            // console.log(nums2[n-1])
            nums1[temp] = nums2[n-1];
            temp--;
            n--;
        }

    }
};