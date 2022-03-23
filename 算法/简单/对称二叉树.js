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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if(root === null) {
        return
    }
    const nodeIsEqual = function(left, right) {
        if(left === null && right === null) {
            return true
        }
        if(left === null || right === null || left.val !== right.val) {
            return false
        }
        return nodeIsEqual(left.left, right.right) && nodeIsEqual(left.right, right.left)
    }
    return nodeIsEqual(root.left, root.right)
};

// 对称必要条件：0.以根节点root为分界线 1.左右两边子树节点数量一样 2.子树节点数值相等
// 左子节点的左节点等于右子节点的右节点，左子节点的右子节点等于右子节点的左子节点