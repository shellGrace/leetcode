/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let str = s.toLowerCase().match(/[a-z0-9]+/g) // 预处理
    if(!str) return true
    let newStr = str.join('')
    // console.log('newStr', newStr)
    let i = 0
    let j = newStr.length - 1
    let len = parseInt(newStr.length / 2)
    while(i < len) {
        if(newStr[i] !== newStr[j]) {
            return false
        }
        i++
        j--
    }
    return true
};

console.log('isPalindrome', isPalindrome("A man, a plan, a canal: Panama"))