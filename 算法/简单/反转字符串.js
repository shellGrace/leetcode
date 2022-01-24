/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // let str = ''
    // for(let i = 0; i < s.length; i++) {
    //     str = str + s[i]
    // }
    // for(let i = 0; i < s.length; i++) {
    //     s[s.length - 1 - i] = str[i]
    // }

    /** 对称 */
    // let n = parseInt(s.length / 2) 
    // for(let i = 0; i < n; i++) {
    //     let temp = s[i]
    //     s[i] = s[s.length-1-i]
    //     s[s.length-1-i] = temp
    // }

    /** 双指针 */
    let left = 0
    let right = s.length - 1 
    while(left < right) {  // 直到他们相遇
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    return s
};

reverseString(["h","e","l","l","o","x"])