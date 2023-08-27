/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let index = 0 // 用于计数 存放数字的位置
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[index] = nums[i] 
            index = index + 1
        }
    }
    let len = nums.length - index
    let i = 0;
    while(i < len) {
        nums[index] = 0
        index++
        i++
    }
    // console.log(nums)
};

moveZeroes([1, 0, 3, 0, 9])