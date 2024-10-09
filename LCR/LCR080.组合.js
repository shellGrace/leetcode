/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 回溯、递归、或DFS
 * 通用模板
 * function backtrack(状态, 选择列表) {
    if (满足结束条件) {
        记录结果;
        return;
    }
    for (选择 in 选择列表) {
        做选择;
        递归进入下一层决策树;
        撤销选择;
    }
}
 */
var combine = function(n, k) {
    let res = []
    const backtrack = (start, combine) => {
        if(combine.length === k) {
            res.push([...combine])
            return
        }
        for(let i = start; i <= n; i++) {
            combine.push(i)
            backtrack(i+1, combine)
            combine.pop()
        }
    }
    backtrack(1, [])
    return res
};

let n = 4, k = 2
console.log(combine(n, k));
