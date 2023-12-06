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
var zigzagLevelOrder = function(root) {
  let res = []
  if(root === null) return res
  let stack = [] // 暂存每次遍历的路径
  stack.push(root)
  let level = 0
  while(stack.length > 0) {
    let cur = []  
    level++
    const len = stack.length // 保证循环的是当前层级的节点
    for(let i = 0; i < len; i++) {
      root = stack.pop() // 固定从队头开始取
      if(level % 2 !== 0) {
        cur.push(root.val)
      } else {
        // 偶数层
        cur.unshift(root.val) // 从头开始加
      }
      // 固定队尾开始加
      if(root.left) {
        stack.unshift(root.left);
      }
      if(root.right) {
        stack.unshift(root.right);
      }
    }
    res.push(cur)
  }
  return res
};

const root = [3,9,20,null,null,15,7]
// 输出：[[3],[20,9],[15,7]]

// console.log(zigzagLevelOrder(tree));
