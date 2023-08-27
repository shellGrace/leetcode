/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let nums = [...this.nums]
    let arr = []
    let n = nums.length
    while(n > 0) {
        let random = Math.floor(Math.random()*(n));
        arr.push(nums[random])
        nums.splice(random, 1)
        n--
    }
    return arr
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */


// class Solution {
//     constructor(nums) {
//         this.arr = nums
//         this.nums = nums
//     }

//     reset() {
//         this.nums = this.arr
//     }

//     shuffle() {
//         Math.random
//     }
// }


// Solution(int[] nums) 使用整数数组 nums 初始化对象
// int[] reset() 重设数组到它的初始状态并返回
// int[] shuffle() 返回数组随机打乱后的结果

// 洗牌算法
var shuffle = function(nums) {
    if(nums === null) return nums
    let arr = []
    let n = nums.length
    while(n > 0) {
        let random = Math.floor(Math.random()*(n));
        arr.push(nums[random])
        nums.splice(random, 1)
        n--
    }
    return arr
}

console.log('shuffle', shuffle(null));