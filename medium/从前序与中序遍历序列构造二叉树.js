// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历
// 要求：请构造二叉树并返回其根节点。

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

// 输入: preorder = [-1], inorder = [-1]
// 输出: [-1]

// 先序 根-左-右  中序 左-根-右
/**
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
var buildTree = function (preorder, inorder) {
  if (inorder.length === 0) return null;
  if(preorder.length === 0) return
  let curRoot = preorder.shift();
  const root = new TreeNode(curRoot); // 每一次递归实际上是在创建一个子树
  const mid = inorder.indexOf(curRoot);
  const leftInorder = inorder.slice(0, mid);
  const rightInorder = inorder.slice(mid + 1);
  if (leftInorder) {
    root.left = buildTree(preorder, leftInorder);
  }
  if (rightInorder) {
    root.right = buildTree(preorder, rightInorder);
  }
  return root;
};

let preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));

// 构建树需要确定树节点的位置，根据前序遍历，每一次的遍历节点 都是树中的相对根节点
// 对于中序遍历，左-根-右 利用前序遍历得到的相对根节点，在中序遍历中划分出相对的左、右子树
// 一直循环到所有元素都归位-递归
// 递归终止条件  如果中序遍历的列表为空，说明当前子树为空，返回 null。
