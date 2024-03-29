/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    const preHead = new ListNode(-1);  // 创建一个新节点，并赋值为 -1（使其最小）
    let pre = preHead
    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            pre.next = list1
            list1 = list1.next
        } else {
            pre.next = list2
            list2 = list2.next
        }
        pre = pre.next  // pre 指针后移
    }
    if(list1 !== null) {
        pre.next = list1
    }
    if(list2 !== null) {
        pre.next = list2
    }
    return preHead.next
};

/**
 * prehead 和 prev ;两个对象使用同一个引用地址; 
 * 但是题目要求返回 链表头, 根据链表头才能找出后面的链表; 
 * 所以 prehead 没进行next操作, prev 对创建的链添加节点, 
 * 返回 链表头 第一个节点是创建的val = -1,所以实际链表头是: prehead.next
 */

function arrayToListNode(arr) {
    const m = new ListNode(arr[0])
    let a = m;
    for(let i = 1; i < arr.length; i++) {
        a.next = new ListNode(arr[i])
        a = a.next;
    }
    return m;
}

function listNodeToArray(head) {
    const r = [];
    let node = head;
    while(node) {
        r.push(node.val);
        node = node.next;
    }
    return r;
}

function testListNode() {
    var m1 = arrayToListNode([1, 3, 4, 6]);
    var m2 = arrayToListNode([5, 6, 8, 10]);

    const resultNode = mergeTwoLists(m1, m2);
    const resultArray = listNodeToArray(resultNode);
    console.log('resultArray: ', resultArray)
}

testListNode()