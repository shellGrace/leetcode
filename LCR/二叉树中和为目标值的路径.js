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

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function arrayToTree(array) {
  if (!array.length) return null;

  const root = new TreeNode(array[0]);
  const queue = [root];

  for (let i = 1; i < array.length; i++) {
    const current = queue.shift();

    if (array[i] !== null) {
      current.left = new TreeNode(array[i]);
      queue.push(current.left);
    }

    i++;

    if (i < array.length && array[i] !== null) {
      current.right = new TreeNode(array[i]);
      queue.push(current.right);
    }
  }

  return root;
}

let tree = arrayToTree([5,4,8,11,null,13,4,7,2,null,null,5,1])
console.log(pathTarget(tree, 22));