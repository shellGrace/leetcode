/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0, end = 0
    for(let i = 0; i < s.length; i++) {
        // 以 i 为中心扩散
        let [left1, right1] = centerDiffuseToSub(s, i, i)
        // 以 i 和 i+1 的间隙（假设回文串为偶数长度） 为中心扩散
        let [left2, right2] = centerDiffuseToSub(s, i, i + 1)
        
        let maxLen = end - start
        if(right1 - left1 > maxLen) {
            start = left1
            end = right1
        }
        if(right2 - left2 > maxLen) {
            start = left2
            end = right2
        }
    }
    return s.substring(start, end + 1)
};
// @lc code=end

// 中心扩散算法
var centerDiffuseToSub = function(s, left, right) {
    // s[left] === s[right] 回文字符
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--; // 左侧扩散
        right++; // 右侧扩散
    }
    return [left + 1, right - 1]
}

// Example usage:
const inputString = "babad";
console.log(longestPalindrome(inputString)); // Output will be the longest palindromic substring in the input string
console.log(centerDiffuseToSub(inputString, 2, 2));
