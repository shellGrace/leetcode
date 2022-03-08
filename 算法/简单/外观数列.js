/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    let str = '1'
    for (let i = 1; i < n; i++) {
        const arr = [];  // 存储结果
        let start = 0;
        let pos = 0;  // 每次循环进行重置
        console.log(n, str)
        while (pos < str.length) {
            while (str[pos] === str[start]) {
                pos++   // 相等则指针后移
            }
            console.log(start, pos);
            const count = pos - start
            arr.push(String(count) + str[start])
            start = pos  // 下一次开始位置
        }
        str = arr.join('');
    }
    console.log(str);
    return str;
};

countAndSay(4)

// 输入：n = 4
// 输出："1211"
// 解释：
// countAndSay(1) = "1"
// countAndSay(2) = 读 "1" = 一 个 1 = "11"
// countAndSay(3) = 读 "11" = 二 个 1 = "21"
// countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"
