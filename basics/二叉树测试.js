// 将数组转换为二叉树
/**
 * 正常来说一个数的结构展现为js形式
 * 是这样的
 const tree = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
 };
 * 我们需要将树结构的数据转为数组形式 方便测试相关函数
 * 输入 [1, null, 2, 3] 输出为 tree 
 */
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
  
function arrayToTree(array) {
  if (!array.length) return null;

  const root = new TreeNode(array[0]);
  const queue = [root];

  for (let i = 1; i < array.length; i++) {
    const current = queue.shift();

    if (array[i] !== null) {
      current.left = new TreeNode(array[i]);
      queue.push(current.left);
    }

    i++;

    if (i < array.length && array[i] !== null) {
      current.right = new TreeNode(array[i]);
      queue.push(current.right);
    }
  }

  return root;
}

// 测试用例
const inputArray = [1, null, 2, 3];
const tree = arrayToTree(inputArray);

console.log(tree);  
