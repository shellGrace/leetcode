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

// 广度遍历 BFS
var maxDepth = function(root) {
    if(root === null) {
        return 0
    }
    const queue = []   // 定义一个队列--先进先出
    let deep = 0   // 记录深度
    queue.push(root)  // 将根节点放入队列
    while(queue.length !== 0) {
        deep++  // 深度每次加一
        // 遍历确保每层节点不被重复计数
        for(let i = 0; i < queue.length; i++) {
            const node = queue.shift()  // 获取节点
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
    }
    return deep
};


// 广度 BFS --用队列实现
// 深度 DFS --用栈实现
// 递归解法 也属于深度 DFS

// 二叉树的最大深度 max(l,r)+1 即 当前根节点加左右子树最大深度
// 时间复杂度：O(n) 每个节点在递归中只被遍历一次