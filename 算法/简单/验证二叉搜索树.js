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
 var isValidBST = function(root) {
    const leafLimit = function(min, root, max) {
        if(root === null) {
            return true
        }
        if(root.val <= min || root.val >= max) {
            return false
        }
        // ***左子树需小于任意左根节点 左子树可无穷小
        // 右子树需大于任意右根节点 右子树可无穷大
        return leafLimit(min, root.left, root.val) && leafLimit(root.val, root.right, max)
    }
    return leafLimit(-Infinity, root, Infinity)
};

// Infinity 是表示正无穷大的数值。
// -Infinity 是表示负无穷大的数值。