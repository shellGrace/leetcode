/**
 * LCR 145. 判断对称二叉树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkSymmetricTree = function (root) {
  if (!root) return root;
  return check(root.left, root.right);
};

var check = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  // 对称条件 左子树的左 等于 右子树的右
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
};
