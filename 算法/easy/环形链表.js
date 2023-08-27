/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    while(head !== null) {
        if(head.val === 'isVisited') {
            return true
        }
        head.val = 'isVisited'
        head = head.next
    }
    return false
};