/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let childStr = ''
    let strLen = 0
    let x = 0
    for(let i = 0; i < s.length; i++) {
        x = i // 下一轮起始位置
        while(x < s.length) {
            if(childStr.includes(s[x])) {
                x = x + 1 // 设定当前循环的起始位置
                break // 终止循环
            }
            childStr = childStr + s[x]
            x = x + 1
        }
        // 当前长度和上一个最大长度比较
        strLen = childStr.length > strLen ? childStr.length : strLen
        childStr = '' // 并且 childStr 初始化（新一轮）
    }
    return strLen
};

let s = 'pwwkew'
lengthOfLongestSubstring(s)