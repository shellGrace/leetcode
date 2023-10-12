/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // 新建一个结点，并将头指针赋值给它
    let newHead = new ListNode(0);
    newHead.next = head
    // 定义小组前驱结点和末尾结点
    let pre = newHead
    let end = newHead
    // 当前小组末尾结点后还存在 继续循环找下一个小组
    while(end.next !== null) {
        // 进行 k 次遍历，获取当前小组的尾结点
        for(let i = 0; i < k; i++) {
            if(end === null) break
            end = end.next
        }
        if(end === null) break
        let start = pre.next // 当前小组的开始结点
        let next = end.next // 当前小组的后驱结点
        end.next = null // 将当前组的最后一个节点的next指针断开
        pre.next = reverse(start) // 前驱结点链接翻转小组结果
        start.next = next // 将当前小组后驱结点更新到下一小组
        pre = start // 更新下一小组前驱结点
        end = pre // 更新下一小组初始尾结点
    }
    return newHead.next
};

var reverse = function(head) {
    let pre = null
    let cur = head
    while(cur !== null) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}
