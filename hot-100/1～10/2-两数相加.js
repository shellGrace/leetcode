/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null; // 头尾节点初始化
  let tail = null; // 初始化一个链表，首先将新节点赋值给 tail，然后将 tail 的值再赋值给 head
  let carry = 0 // 进位
  // 遍历链表会从头节点开始 重要！！
  while (l1 || l2) {
    let n1 = l1?.val ?? 0;
    let n2 = l2?.val ?? 0;
    let sum = n1 + n2 + carry; // 当前和
    let node = new ListNode(sum % 10)
    if(!head) {
        // 初始化
        head = tail = node
    } else {
        tail.next = node // 做指向的动作
        tail = tail.next // 真正的赋值
    }
    carry = Math.floor(sum / 10) // 取整得进位
    // 移动指针
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  // 退出循环，检测最后进位
  if(carry > 0) {
    tail.next = new ListNode(carry)
    tail = tail.next
  }
  return head
};
