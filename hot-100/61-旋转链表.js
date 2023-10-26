/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) {
        return head;
    }
    let len = 1;
    let cur = head;
    let left = head;
    // 计算链表长度
    while (cur.next) {
    cur = cur.next;
    len++;
    }
    k = k % len; // 防止长度超过链表长度
    if (k === 0) { // 此时k已经发生变化，需要重新判断
        return head;
    }
    let count = 1; 
    while (count + k < len) { 
    left = left.next;  // 拿到左边的链表
    count++;
    }
    let newHead = left.next; // 右边部分
    cur.next = head; // 链表尾结点连接到头结点
    left.next = null; // k之后滞空
    return newHead;
};
