/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return root;
  const queue = [root];
  // 层序遍历 
  // shift 模拟队列 先入先出
  while (queue.length > 0) {
    const len = queue.length;
    // 保证每次从队列中拿出来遍历的元素都是属于同一层的
    for (let i = 0; i < len; i++) {
      const node = queue.shift(); 
      // 当前层最后一个不用处理
      // 但是最后一个节点的子节点需要push
      if (i < len - 1) {
        node.next = queue[0]; // shift后的数组队列的第一个元素即为下一个
      } 
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
};
// @lc code=end

// 完美二叉树 不存在节点为null

// [1,2,3,4,5,6,7]
// [1,#,2,3,#,4,5,6,7,#]

// 错误例子  node.next = queue[0] 判读条件为  queue[0] 存在
// 导致将最后一个节点和下一层进行连接
// [1,#,2,3,4,5,6,7,#,4,5,6,7,#]

