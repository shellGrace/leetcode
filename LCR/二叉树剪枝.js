/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { arrayToTree, treeToArray } = require('../basics/二叉树测试.js')
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    // 确定边界条件，当输入为空时，即可返回空
    if(!root) return null
    // 对左子树和右子树分别递归进行 pruneTree 操作
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    // 当这三个条件 左子树为空，右子树为空，当前节点的值为 0，
    // 同时满足时，才表示以当前节点为根的原二叉树的所有节点都为 0
    if(!root.left && !root.right && root.val === 0) {
        return null
    }
    // 有任一条件不满足时，当前节点不应该移除，返回当前节点。
    return root
};

let root = [1,0,1,0,0,0,1] 
// [1,null,1,null,1]
let tree = arrayToTree(root)

console.log(treeToArray(pruneTree(tree)));