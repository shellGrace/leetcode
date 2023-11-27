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

// 测试用例
const testCase = [1, 2, 3, 4, 5];
const linkedList = arrToNode(testCase);
console.log('linkedList: ', linkedList);

const resultArray = nodeToArr(linkedList);
console.log(resultArray);  // 应该输出 [1, 2, 3, 4, 5]
