/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null) return head
    // 保存偶链表头节点
    let evenHead = head.next
    let odd = head, even = head.next
    // 全部节点分离完毕的条件是 even 为空节点或者 even.next 为空节点
    while(even !== null && even.next !== null) {
        // 奇数节点的后一个节点需要指向偶数节点的后一个节点
        odd.next = even.next
        odd = odd.next
        // 偶数
        even.next = odd.next
        even = even.next
    }
    // 串连奇偶链表
    odd.next = evenHead
    return head
};
// @lc code=end

class ListNode {
    constructor(val, next) {    
        // 链表结点
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

const arrToNode = (arr) => {
    // 新建一个链表结点
    let head = new ListNode(arr[0])
    let cur = head
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
    return head
}

const nodeToArr = (head) => {
    // 新建一个链表结点
    let arr = []
    let cur = head
    while(cur != null) {
        arr.push(cur.val)
        cur = cur.next
    }
    return arr
}

// 输入: head = [1,2,3,4,5]
// 输出: [1,3,5,2,4]

// 链表测试流程
// 数组转链表 - 得到函数入参 - 执行函数 - 执行结果转数组
const testCase = [1,2,3,4,5]
const linkedList = arrToNode(testCase);
// console.log('linkedList: ', linkedList);
const link = oddEvenList(linkedList)
const resultArray = nodeToArr(link);
console.log(resultArray); 
