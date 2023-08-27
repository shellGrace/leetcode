/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let left = 0
    let right = left + 1
    while(right < nums.length) {
        if(nums[left] !== nums[right]) {
            left += 1    // left 右移一步
            nums[left] = nums[right]
        }
        right += 1 
    }
    return left + 1
};

// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]
console.log('result', removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
