/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const symbolMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    if(s.length % 2 !== 0) return false
    let stack = []
    let i = 0
    while(i < s.length) {
        if(symbolMap[s[i]] !== undefined && symbolMap[s[i]] === stack.slice(-1)[0]) {
            stack.pop()
        } else {
            stack.push(s[i]) 
        }
        i++
    }
    if(stack.length !== 0) return false
    return true
};

const s = '([])'
console.log(isValid(s))