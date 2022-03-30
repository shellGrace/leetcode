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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(root === null) {
        return []
    }
    const result = []
    const queue = []   
    let curRow = []
    queue.push(root)
    while(queue.length !== 0) {
        curRow = []  // 重置
        let len = queue.length
        for(let i = 0; i < len; i++) {
            let node = queue.shift()  // 获取节点
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
            curRow.push(node.val)
        }
        result.push(curRow)
    }
    return result
};