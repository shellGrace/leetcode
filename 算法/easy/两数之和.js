/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let object = {}
    for(let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        let diff = target - cur
        if(object[diff] !== undefined) {
            return [object[diff], i]
        }
        object[cur] = i  // 当前元素下标赋值当前元素给 object
    }
    return []
 };

 let nums = [2,7,11,15]
 let target = 9

 console.log('--', twoSum(nums, target))