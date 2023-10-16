/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 处理边界情况
    let start = -1
    let end = -1
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            if(start === -1) {
                // 说明还未找到
                start = i
                end = i
            } else {
                end = i
            }
        }
    }
    return [start, end]
};
