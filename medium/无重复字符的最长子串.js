/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let start = 0, end = 0
    let maxLength = 0
    let charStr = new Set()
    while(start < s.length) {
        // 此处 end 无需重置为 start -已经比较过的字串在删掉上一次的初始字符后，一定小于上一次得到的最大长度
        while(end < s.length && !charStr.has(s.charAt(end))) {
            charStr.add(s.charAt(end))
            end++
        }
        maxLength = Math.max(maxLength, end - start)
        charStr.delete(s.charAt(start))
        start++
    }
    return maxLength
};

console.log(lengthOfLongestSubstring('pwwkew'));