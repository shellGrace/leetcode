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
 var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next  // 指针右移
};

// 链表的节点删除
// 找到被删除的节点的前驱节点，pre next 指针域指向被删除节点的下一个节点
// pre.next = pre.next.next