/**
AVL平衡二叉树: 任何节点的两个子树的高度最大差别为1

BST二叉查找树: 左子树上所有结点的值均小于它的根结点的值
右子树上所有结点的值均大于它的根结点的值；

前序遍历：访问根结点；
先序遍历左子树；
先序遍历右子树

中序遍历：中序遍历左子树；
访问根结点；
中序遍历右子树

后序遍历：后序遍历左子树；
后序遍历右子树；
访问根结点
*/

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
 * @return {number[]}
 */
// 前序遍历 根-左-右
var preorderTraversal = function (root) {
  let result = [];
  var preorder = function (root, result) {
    if (root === null) {
      return;
    }
    result.push(root.val);
    preorder(root.left, result);
    preorder(root.right, result);
  };
  preorder(root, result);
  return result;
};

// 中序遍历 左-根-右
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = []
  var inorder = (root) => {
    if(root === null) return
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
};

// 后序遍历 左-右-根
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let res = []
  var postorder = (root) => {
    if(root === null) return
    postorder(root.left)
    postorder(root.right)
    res.push(root.val)
  }
  postorder(root)
  return res
};
