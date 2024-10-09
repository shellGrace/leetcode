/**
 * LCR 084. 全排列 II 
 * @param {number[]} nums
 * @return {number[][]}
 * 关键点：前一个 1 未被当前递归层使用，说明 前一个1在上次结果中已经存在了
 */
var permuteUnique = function(nums) {
    let res = []
    let used = new Array(nums.length).fill(false)
    nums.sort((a, b) => a - b)
    const backtrack = (combine) => {
        if(combine.length === nums.length) {
            res.push([...combine])
            return
        }
        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue
            // i > 0避免数组越界 在同一层递归中防止重复排列的生成 
            if(i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue
            used[i] = true
            combine.push(nums[i])
            backtrack(combine)
            combine.pop()
            used[i] = false
        }
    }
    backtrack([])
    return res
};

let nums = [1,1,2]
console.log(permuteUnique(nums));

// 输入：
// 输出：
//  [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
