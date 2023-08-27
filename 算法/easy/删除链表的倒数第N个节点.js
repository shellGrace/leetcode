/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let len = 0
    // 计算链表长度
    let h = head
    let pre = head
    while(h !== null) {
        len++
        h = h.next
    }
    // 删除的是头节点
    if(len - n === 0) return head.next
    // 得到被删除节点的前一个
    for(let i = 0; i < len - n - 1; i++) {
        pre = pre.next
    }
    // 前一个指向节点后一个 删除
    pre.next = pre.next.next  // 当删除最后一个时 pre.next.next 为 null
    return head
};
