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
 var maxDepth = function(root) {
    if(root === null) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// 广度 BFS --用队列实现
// 深度 DFS --用栈实现

// 二叉树的最大深度 max(l,r)+1 即 当前根节点加左右子树最大深度
// 时间复杂度：O(n) 每个节点在递归中只被遍历一次