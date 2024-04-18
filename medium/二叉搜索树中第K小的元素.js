/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest1 = function (root, k) {
  // 中序遍历得到一个排序后的二叉树数组
  let list = inorderTraversal(root);
  // 再进行查找k大元素
  return list[k - 1];
};

var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};

var kthSmallest = function (root, k) {
  const stk = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    k--;
    if (k === 0) break;
    root = root.right;
  }
  return root.val;
};

// 测试用例
const inputArray = [12, 8, 13, 7, 10, null, 15, 6, null, 9, 11, 14, 17];
const tree = arrayToTree(inputArray);
let kth = kthSmallest(tree, 3);
console.log("kth: ", kth);
