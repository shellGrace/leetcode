/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    let end = ''
    let str = ''
    for(let i = 0; i < s.length; i++) {
        if(i < n) {
            end = end + s[i]
        } else {
            str = str + s[i]
        }
    }
    return str + end
};

/**
 * 输入: s = "abcdefg", k = 2
输出: "cdefgab"
 */