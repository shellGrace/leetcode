/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return

    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    const childToBST = function(nums, start, end) {
        if(start > end) return null
        let mid = Math.floor((start + end) / 2)  // 确定根节点
        let node = new TreeNode(nums[mid]) // 数组转树，需要 new TreeNode
        node.left = childToBST(nums, start, mid - 1)
        node.right = childToBST(nums, mid + 1, end)
        return node
    }
    return childToBST(nums, 0, nums.length - 1);
};

console.log(sortedArrayToBST([-10,-3,0,5,9])); 

/*
二叉搜索树：若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 
若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 
它的左、右子树也分别为二叉排序树 
*/