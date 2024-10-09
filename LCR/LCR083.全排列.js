/**
 * LCR 083. 全排列
 * @param {number[]} nums
 * @return {number[][]}
 * 依然是 回溯法（Backtracking） 与组合不同的是，在排列中，选取的元素的顺序是重要的。
 * 回溯函数三要素 定义递归终止条件、遍历元素、（选择+递归+撤销）
 * 
 * 组合问题强调顺序无关，排列则要求顺序有差异。
 * 排列是指从给定元素中选出一定数量的元素，且不同的顺序视为不同的结果。
 */
var permute = function(nums) {
    let res = []
    let used = new Array(nums.length).fill(false) // 标记使用状态
    const backtrack = (combine) => {
        if(combine.length === nums.length) {
            res.push([...combine])
            return
        }
        // 每次都从头开始
        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue // 跳过已使用的元素
            
            combine.push(nums[i])
            used[i] = true
            
            backtrack(combine)
            
            combine.pop()
            used[i] = false
        }
    }
    backtrack([])
    return res
};

console.log(permute([1, 2, 3]));
