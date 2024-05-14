/**
 * LCR 175. 计算二叉树的深度
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { arrayToTree } = require("../basics/二叉树测试");
/**
 * @param {TreeNode} root
 * @return {number}
 */
var calculateDepth = function (root) {
  // 深度优先搜索
  // 树的深度 等于 左子树的深度 与 右子树的深度 中的 最大值 +1 
  // if(!root) return 0
  // return  Math.max(preOrder(root.left), preOrder(root.right)) + 1

  let maxDepth = 0
  const preOrder = (root, depth) => {
    if(!root) return 0
    maxDepth = Math.max(maxDepth, depth)

    preOrder(root.left, depth+1)
    preOrder(root.right, depth+1)
  }
  preOrder(root, 1)
  return maxDepth

  // 队列-层序遍历实现
//   if (!root) return 0;
//   let queue = [root], res = 0;
//   while(queue.length) {
//     let tmp = [] // 临时存储下一层节点
//     while(queue.length) {
//         let node = queue.shift()
//         node.left && tmp.push(node.left)
//         node.right && tmp.push(node.right)
//     }
//     queue = tmp
//     res = res + 1
//   }
//   return res
};

let root = [1, 2, 2, 3, null, null, 5, 4, null, null, 4];
// 输出: 4
let tree = arrayToTree(root);
console.log("res", calculateDepth(tree));
