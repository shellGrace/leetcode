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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];
    if (!root) {
        return res;
    }
    // 用来暂存遍历过的路径节点
    const stack = []; // 栈 先进后出
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left; // 找到最左子结点
        }
        root = stack.pop(); // 将最左子结点出栈
        res.push(root.val); 
        root = root.right; // 更新节点值
    }
    return res;
};

// 递归解法
var inorderTraversal2 = function(root) {
    let res = []
    const inorder = (root) => {
        if(!root) return
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return res
};

// 后序遍历
var postorderTraversal = function(root) {
    const res = [];
    if (!root) {
        return res;
    }
    const stack = []; // 栈 先进后出
    let prev = null; // 上一个访问的结点
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left; // 找到最左子结点
        }
        root = stack.pop(); // 将最左子结点出栈
        if (!root.right || root.right === prev) { // 最左子结点是否存在右子节点
            res.push(root.val); // 保证没有右子节点进行push
            prev = root; // 更新节点
            root = null; // 防止再走 while 循环
        } else {
            // 存在最左子结点的右子节点
            // 重复进行遍历右子节点树
            stack.push(root); // 将当前节点压栈
            root = root.right; // 更新节点值
        }
    }
    return res;
};

// 前序遍历
var preTraversal = function(root) {
    const res = [];
    if (!root) {
        return res;
    }
    const stack = []; // 栈 先进后出
    while (root || stack.length > 0) {
        // 以节点为中心，依次遍历 依次push
        while (root) {
            res.push(root.val); 
            stack.push(root);
            root = root.left; // 更新左节点为下一次根节点
        }
        root = stack.pop(); // 将最左子结点出栈 并 作为当前根节点
        root = root.right; // 更新节点值
    }
    return res;
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
  
const tree = arrayToTree([1, 2, 3, 4, 5, null, 6, null, null, null, 7])
console.log('inorderTraversal', inorderTraversal(tree));

// 前序 根-左-右
// 中序 左-根-右
// 后序 左-右-根
