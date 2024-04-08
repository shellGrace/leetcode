/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let len = nums.length
  if(len < 3) return false
  let first = nums[0], second = Number.MAX_VALUE // 贪心
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]
    if(num > second) {
      console.log('second: ', first, second, num);
      return true
    } else if (num > first) {
      // 重置第二位为num
      second = num
    } else {
      // num < first < second
      first = num
    }
  }
  return false;
};
// @lc code=end
console.log(increasingTriplet([5, 1, 6]));
