/**
 * LCR 081. 组合总和
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 寻找所有可行解的题，我们都可以尝试用「搜索回溯」的方法来解决
 */
var combinationSum = function (candidates, target) {
  let res = [];
  const dfs = (target, combine, idx) => {
    if (idx === candidates.length) return;
    if (target === 0) {
      res.push([...combine]);
      return;
    }
    // 每一次 都执行2种可能 要么继续当前元素 要么跳过当前元素
    dfs(target, combine, idx + 1);
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };
  dfs(target, [], 0);
  return res;
};

var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b)
  const dfs = (target, combine, idx) => {
    if(idx === candidates.length) return
    if(target === 0) {
        res.push([...combine])
        return
    }
    for(let i = idx; i < candidates.length; i++) {
        if(target < candidates[i]) {
            break // 剪枝
        }
        combine.push(candidates[i]) // O(k) 插入元素
        dfs(target-candidates[i], combine, i) // i 可重复使用
        combine.pop() // 回溯
    }
  }
  dfs(target, [], 0);
  return res;
};

/**
 * 对于每个递归调用，i 的值从 idx 到 n 并且每个递归分支会继续递归，可能会导致所有可能组合的遍历。
 * 在最坏情况下，递归的深度可以达到 n，即 candidates 的长度 因为每次递归都有可能选择或跳过当前元素
 * 
 * 两种解法对比
 * 第一种执行所有可能 时间复杂度约为 2^n 指数级（细胞分裂）
 * 在最坏情况下，递归树的每个节点都会被访问，由于每个节点都有两个分支（选或不选），递归树的叶子节点数可以达到 2^n，即组合的数量是指数级的
 * 
 * 第二种进行剪枝 并回溯
 * 最坏情况为 O(2^n * k)，通过剪枝，实际复杂度可以大大降低，接近 O(n * k) 或更低
 * O(k) 插入元素 每插入一次 就执行一次递归
 */

let candidates1 = [2, 3, 6, 7],
  target1 = 7;
// 输出: [[7],[2,2,3]]
console.log(combinationSum(candidates1, target1));

let candidates2 = [2, 3, 5],
  target2 = 8;
// 输出: [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum(candidates2, target2));

let candidates3 = [2],
  target3 = 1;
// 输出: []
console.log(combinationSum(candidates3, target3));

let candidates4 = [1],
  target4 = 1;
// 输出: [[1]]
console.log(combinationSum(candidates4, target4));

let candidates5 = [1],
  target5 = 2;
// 输出: [[1,1]]
console.log(combinationSum(candidates5, target5));
