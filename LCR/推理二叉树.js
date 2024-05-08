/**
 * LCR 124. 推理二叉树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const { arrayToTree, treeToArray, TreeNode } = require("../basics/二叉树测试.js");
const { deepEqual } = require("../basics/函数测试");

var deduceTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  // [ 根节点, [左子树的前序遍历结果], [右子树的前序遍历结果] ]
  // [ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ]
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);

  let index = inorder.findIndex((e) => e === rootVal);
  let inorderLeft = inorder.slice(0, index);
  let inorderRight = inorder.slice(index + 1);

  let right = index + 1;
  let preorderLeft = preorder.slice(1, right);
  let preorderRight = preorder.slice(right);

  root.left = deduceTree(preorderLeft, inorderLeft);
  root.right = deduceTree(preorderRight, inorderRight);
  return root;
};

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

let preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];

let input = treeToArray(deduceTree(preorder, inorder));
let out = [3, 9, 20, null, null, 15, 7];

console.log(deepEqual(input, out));
