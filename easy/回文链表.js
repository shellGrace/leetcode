/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    // 链表转数组
    const arr = []
    while(head !== null) {
        arr.push(head.val)
        head = head.next
    }
    // 双指针判断回文数组
    let len = parseInt(arr.length / 2) 
    let j = arr.length - 1
    for(let i = 0; i < len; i++) {
        if(arr[i] !== arr[j]) {
            return false
        }
        j--
    }
    return true
};

