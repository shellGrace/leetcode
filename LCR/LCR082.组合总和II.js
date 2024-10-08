/**
 * LCR 082. 组合总和 II
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 题解：dfs(pos,rest)递归 + 回溯 pop + 剪枝
 * 回溯: push 临时选择 +递归 查找 + pop 撤销选择当前元素，探索其他可能的组合
 * -构造解并在完成探索后回溯清除当前选择，从而探索其他路径（无论路径是否成功找到组合，都会进行回溯操作来撤销选择）
 * 
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);
  const dfs = (target, combine, idx) => {
    if (target === 0) {
      res.push([...combine]);
      return;
    }
    // idx 表示当前递归层开始遍历 candidates 数组的位置 本轮递归从 idx 位置开始选择元素
    for (let i = idx; i < candidates.length; i++) {
      // 在当前递归层的第一个元素不受限制，对于后续的元素 跳过该元素以避免重复的组合
      if (i > idx && candidates[i] === candidates[i - 1]) continue;
      // 如果当前元素大于剩余的目标值，直接跳出循环（剪枝）
      if (target - candidates[i] < 0) break;
      // 选择当前元素并继续递归
      combine.push(candidates[i]);
      dfs(target - candidates[i], combine, i + 1);
      combine.pop(); // 回溯
    }
  };
  dfs(target, [], 0);
  return res;
};

let candidates1 = [10, 1, 2, 7, 6, 1, 5],
  target1 = 8;
let res1 = [
  [1, 1, 6],
  [1, 2, 5],
  [1, 7],
  [2, 6],
];
console.log(combinationSum2(candidates1, target1));

let candidates2 = [2, 5, 2, 1, 2],
  target2 = 5;
let res2 = [[1, 2, 2], [5]];
console.log(combinationSum2(candidates2, target2));
