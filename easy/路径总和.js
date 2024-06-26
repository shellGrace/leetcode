/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  // 是否存在从当前节点的子节点到叶子的路径，满足其路径和为 sum - val
  if (root.left == null && root.right == null) {
    return targetSum === root.val;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
// @lc code=end
let tree = arrayToTree([5, 4, 8, 11, null, 9, 4, 6, 3, null, null, null, 1]);

console.log(hasPathSum(tree, 22));
