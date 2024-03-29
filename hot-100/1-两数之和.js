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
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i === j) {
                // 已存在目标元素 跳出本次循环 不做查找
                continue
            }
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return undefined
};

const result = twoSum([2,7,11,15], 9)
console.log('result: ', result);
// Continue 开始循环的一次新迭代
// Break 立刻退出循环