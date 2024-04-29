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
 * @param {number} target
 * @return {number[][]}
 */ 
var pathTarget = function (root, target) {
    let path = [], res = []
    recur(root, target, path, res)
    return res
};

var recur = function (root, target, path, res) {
    // 深度优先搜索 
    // 枚举每一条从根节点到叶子节点的路径
    if(!root) return
    path.push(root.val)
    if(!root.left && !root.right && target === root.val) {
        let cur = [...path]
        res.push(cur)
    }
    recur(root.left, target - root.val, path, res)
    recur(root.right, target - root.val, path, res)
    path.pop()
};

let tree = arrayToTree([5,4,8,11,null,13,4,7,2,null,null,5,1])
console.log(pathTarget(tree, 22));