var plusOne = function(digits) {
    /**这种解法会有精度问题 
    if(digits[0] === 0) {
        return [1]
    } 
    let str = ''
    let n = 0
    let r = []
    let len = digits.length
    for(let i = 0; i < len; i++) {
        str = str + digits[i] // 得到数字字符串
    }
    console.log('str--', str)
    n = Number(str) // 得到数字并且加一
    console.log('n--', n)
    str = String(n)
    for(let i = 0; i < str.length; i++) {
        r.push(str[i])
    }
    return r
    */
    let len = digits.length
    for(let i = len - 1; i >= 0; i--) {
        if(digits[i] !== 9) {  // 找到第一个不为9的数字
            digits[i] += 1  // 加一
            return digits
        } else {
            digits[i] = 0  // 全为 9 的情况，会一直走 else 但不会return,因此 执行33-37
        }
    }
    // 全为 9 
    let r = [1]
    for(let i = 1; i < digits.length+1; i++) {
        r[i] = 0
    }
    return r
};

console.log('result', plusOne([9,8,9]))

