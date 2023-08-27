/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    if(n === 1) return '1'  // 递归出口
    let str = countAndSay(n-1) // 存储上一次得到的值
    // console.log('str', str);
    let arr = []  // 存储结果
    let start = 0 // 每次循环的开始下标值
    let count = 1  // 记录每次循环得到的计数
    let index = 1  // 移动的下标 实时找到下一次需要判断的数字 如 1112 中的 2
    // 基于上一次的值来进行处理
    for(let i = 0; i < str.length; i++) {
        // console.log('i---', i, index, str);
        while(index < str.length + 1) {
            // console.log('while--', i);
            if(str[start] === str[index + i]) {
                count++
                index++
                continue  // 计数、移动下标 完成 跳出本次while循环 继续下一轮判断
            }
            // 若不等
            arr.push(count + str[start])
            // console.log(arr);
            count = 0  // 计数清 0
            start = index
        }
    }
    return arr.join('')
};

countAndSay(4)

// 输入：n = 4
// 输出："1211"
// 解释：
// countAndSay(1) = "1"
// countAndSay(2) = 读 "1" = 一 个 1 = "11"
// countAndSay(3) = 读 "11" = 二 个 1 = "21"
// countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"
