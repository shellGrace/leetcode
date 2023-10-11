/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const mergeTwoLists = (l1, l2) => {
    let head = new ListNode();
    let tail = head;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }
    // 剩余元素
    if (l1) {
      tail.next = l1;
    } else if (l2) {
      tail.next = l2;
    }
    return head.next;
  };
  let ans = null;
  for (let i = 0; i < lists.length; i++) {
      // 每次把累加的结果 作为新的链表进行廉价
    ans = mergeTwoLists(ans, lists[i]);
  }
  return ans;
};
