/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    let r = []
    let arr = []
    let node = head
    while(node) {
        arr.push(node.val)
        node = node.next
    }
    for(let i = arr.length - 1; i >= 0; i--) {
        r.push(arr[i])
    }
    return r
};