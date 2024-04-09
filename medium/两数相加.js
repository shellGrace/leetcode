/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0; // 进位
    let dummyHead = new ListNode();
    let tail = dummyHead; // 虚拟头节点的作用是用来指向结果链表的头部 (动态)
    while(l1 || l2 || carry) {
        let n1 = l1 ? l1.val : 0 // 没有值则补位0
        let n2 = l2 ? l2.val : 0
        sum = n1 + n2 + carry
        let digit = sum % 10  // 当前位
        carry = Math.floor(sum / 10)
        tail.next = new ListNode(digit); // 当前位的值更新到节点
        tail = tail.next;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    return dummyHead.next;
};
// @lc code=end

// 题目说的倒序 -例如，整数342按照逆序存储在链表中就是3 -> 4 -> 2。
// 链表的头部包含了整数的最低位，而链表的尾部包含了整数的最高位。
