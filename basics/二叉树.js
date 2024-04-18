/**
 * 遍历-模拟栈
 */
var inorderTraversal = function(root) {
    const res = [];
    const stk = [];
    // 只要还存在节点 继续遍历
    while (root || stk.length) {
        // 节点存在则 依次获取左子节点 直至最左叶子节点 放入栈中待处理
        while (root) {
            stk.push(root);
            root = root.left;
        }
        // 每次循环从栈中取一个节点处理
        // 此时的root为最左子节点（最后一个入栈的）
        root = stk.pop();
        res.push(root.val);
        // 下一轮循环要处理的节点
        // 如果 右子节点不存在，则 代表可以进行处理向上一级的父节点（存在栈中）
        root = root.right;
    }
    return res;
};

// 时间复杂度：O(n)，其中 n 为二叉树节点的个数。在最坏情况下，每个节点都会被访问两次 每个节点最多被压入栈一次，弹出栈一次 因此 n+n=2n 即 O(n)
// 空间复杂度：O(n)。空间复杂度取决于栈深度，而栈深度在二叉树为一条链的情况下会达到 O(n) 的级别。


/**
 * 递归版
 */
var inorderTraversal = function(root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};
/*********** 中序遍历 ********************/

