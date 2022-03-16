/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let pre = null
    let cur = head
    while(cur !== null) {
        let next = cur.next
        // 当前节点的下一个连接到前一个节点（反转）
        cur.next = pre
        pre = cur
        cur = next 
    }
    return pre
};
