/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 无法访问链表的头节点 head ，只能直接访问 要被删除的节点  --意味着函数传参只有 node
 var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next  // 指针右移
};