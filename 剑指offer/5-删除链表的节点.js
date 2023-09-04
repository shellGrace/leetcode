/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let cur = head;
    let prev = null;
    if (head && head.val === val) {
      head = head.next;
      return head
    }
    while (cur) {
      if (cur.val === val) {
        // 尾节点
        if (cur.next === null) {
          prev.next = null;
          break
        } 
        prev.next = cur.next;
        break
      }
      prev = cur;
      cur = cur.next;
    }
    return head
};
