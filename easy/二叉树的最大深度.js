/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let queue = [root];
  let depth = 0;
  // 保证每次拓展完的时候队列里存放的是当前层的所有节点
  while (queue.length > 0) {
    let len = queue.length;
    while (len > 0) {
      let cur = queue.shift();
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      len--;
    }
    // 每处理完一层 层级+1
    depth++;
  }
  return depth;
};
/******** 广度优先搜索 *******/ 

var maxDepth0 = function (root) {
  // 终止条件
  if (!root) return 0; // 终止条件 + 返回值
  // 左子树和右子树的最大深度 l 和 r，那么该二叉树的最大深度即为 max(l,r)+1
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
/******** 深度优先搜索 *******/ 

// @lc code=end

let arr = [3, 9, 20, null, null, 15, 7];
console.log(maxDepth(arrayToTree(arr)));
