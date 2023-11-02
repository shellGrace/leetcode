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
    while(cur !== null) {
        arr.push(cur.val)
        cur = cur.next
    }
    return arr
}

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
var swapPairs = function (head) {
    if (head === null || head.next === null) return head;
    let dummy = new ListNode(0, head); // 创建一个虚拟头节点
    let temp = dummy;
    
    while (temp.next !== null && temp.next.next !== null) {
        let start = temp.next;
        let end = temp.next.next;

        start.next = end.next;
        end.next = start;
        temp.next = end; // 将原前驱结点连接到交换之后的尾结点 防止断链 

        temp = start; // 更新temp的值
    }
    
    return dummy.next; // 返回虚拟头节点的下一个节点作为新的头节点
};

// 递归写法
var swapPairs2 = function (head) {
    if (head === null || head.next === null) return head;
    let cur = head.next;
    // 每次都当作两两结点交换。与非递归的写法，少了 前驱结点连接交换后结点的那一步
    head.next = swapPairs(cur.next); // head 连接后面的子链表
    cur.next = head; // next 连接 head
    return cur;
};

console.log(nodeToArr(swapPairs(arrToNode([1, 2, 3, 4]))))

/*
哨兵节点：这是一个额外创建的节点，通常用于简化链表操作的代码。
哨兵节点的next指针通常指向链表的头节点。
哨兵节点本身不存储任何有效数据，它的主要作用是作为一个固定的节点，使得对链表头节点的操作和对其他节点的操作一致
*/
