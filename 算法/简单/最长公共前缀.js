/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let str = ''
    let q = strs[0] // 固定第一个元素来查询
    let len = q.length  // len 会变，主要是避免无效循环（查询）
    let obj = {}  // 存储每一个单词对应的 “临时公共前缀”
    for(let i = 1; i < strs.length; i++) {
        let cur = strs[i]
        // 对每个元素依次进行比较
        let index = 0
        while(index < len) {
            if(q[index] !== cur[index]) {
                len = index + 1   // 后面的单词只查找前 len 个字母
                if(index === 0) {  // 任意单词在首位找不到 则 不会存在于 obj 对象中 
                    return ''   // 立即返回结果 --不存在公共前缀
                }
                break  // 不需要再继续找 跳过此单词
            }
            // 为公共
            obj[cur] = index
            index++
        }
    }
    // 处理 “临时公共前缀” 得到真正的前缀 index
    let minIndex = q.length - 1
    for(let index in obj) {
        if(obj[index] < minIndex) {
            minIndex = obj[index]
        }
    }
    // 遍历得到结果
    let index = 0
    while(index <= minIndex) {
        str += q[index]
        index++
    }
    return str
};

longestCommonPrefix(["dog","acecar","dar"])

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"