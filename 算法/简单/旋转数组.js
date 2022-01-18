/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let len = nums.length
    let tempArr = [...nums]
    for(let i = 0; i < len; i++) {
       nums[(i+k) % len] = tempArr[i]
    }
    return nums
};

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
console.log(rotate([1,2,3,4,5,6,7], 3)) 