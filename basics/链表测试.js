const ListNode = (val, next) => {
    // 链表结点
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

class ListNode2 {
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
