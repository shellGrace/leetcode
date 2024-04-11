/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let nodeSet = new Set()
    let nodeA = headA
    while(nodeA !== null) {
        nodeSet.add(nodeA)
        nodeA = nodeA.next
    }
    // 如果当前节点在哈希集合中，则后面的节点都在哈希集合中
    let nodeB = headB
    while(nodeB !== null) {
        if(nodeSet.has(nodeB)) {
            return nodeB
        }
        nodeB = nodeB.next
    }
    return null
};
// @lc code=end

// 如果 listA 和 listB 没有交点，intersectVal 为 0
// 如果 listA 和 listB 有交点，intersectVal == listA[skipA] == listB[skipB]

let listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
