// https://leetcode.cn/problems/two-sum/

/**
给定一个整数数组 nums 和一个整数目标值 target，
请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
*/

/**
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
*/

/** 
输入：nums = [3,2,4], target = 6
输出：[1,2] 
*/

/** 
输入：nums = [3,3], target = 6
输出：[0,1] 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map()

    for(let i = 0; i < nums.length; i++) {
      const compareItem = target - nums[i]

      if(map.has(compareItem)) {
         return [map.get(compareItem), i]
      }
      map.set(nums[i], i)
    }
    return []
};

// 测试用例
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6));     // [1,2]
console.log(twoSum([3,3], 6));       // [0,1]
