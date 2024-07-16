/**
 * LCR 007. 三数之和
 * 数组 双指针 排序
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组
 * 对于任意一个满足 0≤i<j<k<n 的三元组 (nums[i],nums[j],nums[k])，必有 nums[i]≤nums[j]≤nums[k]
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return []
    let res = []
    nums = nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let k = nums.length-1
        for(let j = i+1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            // 固定j, 滑动k. 双指针 j<k 如果合的值大于0 说明我们要的值 在左边，k往前走
            while (j < k && nums[i] + nums[j] + nums[k] > 0) {
                k--
            }
            // 指针重合，退出循环
            if (j === k) {
                break;
            }
            if(nums[i] + nums[j] + nums[k] === 0) {
                res.push([nums[i], nums[j], nums[k]])
            }
        }
    }
    return res
};

console.log(threeSum([-1,0,1,2,-1,-4]));
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

/** 三重循环 每次固定一个+结果去重 复杂度 O(n#3) 
 *  let res = []
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]
                if(sum === 0) {
                    res.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    // 
    // 对res去重 序列化-可哈希
    res = [...new Set(res.map(e => JSON.stringify(e.sort((a, b) => a - b))))]
    return res.map(e => JSON.parse(e))
 * 
**/

// 优化：排序+双指针 -总时间复杂度为 O(N#2) = 双指针枚举的总时间复杂度为 O(N#2) + 排序的时间复杂度为 O(NlogN)
