/**
 * LCR 081. 组合总和
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 寻找所有可行解的题，我们都可以尝试用「搜索回溯」的方法来解决
 */
var combinationSum = function(candidates, target) {
    let res = []
    const dfs = (target, combine, idx) => {
        // candidates 数组被全部用完
        if(idx === candidates.length) {
            return
        }
        if(target === 0) {
            res.push(combine)
            return
        }
        // 跳过当前元素
        dfs(target, combine, idx+1)
        // 选择当前元素
        if(target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx) // idx无需加1因为可以无限次使用元素
        }
    }
    dfs(target, [], 0)
    return res
};

let candidates1 = [2,3,6,7], target1 = 7
// 输出: [[7],[2,2,3]]
console.log(combinationSum(candidates1, target1));

let candidates2 = [2,3,5], target2 = 8
// 输出: [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum(candidates2, target2));

let candidates3 = [2], target3 = 1
// 输出: []
console.log(combinationSum(candidates3, target3));

let candidates4 = [1], target4 = 1
// 输出: [[1]]
console.log(combinationSum(candidates4, target4));

let candidates5 = [1], target5 = 2
// 输出: [[1,1]]
console.log(combinationSum(candidates5, target5));


