/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    // 丢弃无用的前导空格
    let newS = ''
    let symbol = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ' && symbol === 0) {
            continue
        } else {
            symbol = 1
        }
        newS += s[i]
    }
    // 得到数字
    let res = ''
    let index = 0
    if(newS[0] === '-') {
        symbol = -1
        index = 1
    } else if(newS[0] === '+') {
        symbol = 1
        index = 1
    } else {
        symbol = 1
    }
    
    while(index < newS.length) {
        if(!('0123456789').includes(newS[index])) {
            break
        } else {
            res += newS[index]
        }
        index++
    }
    if(res === '') return 0
    res = Number(res) * symbol
    // 数字范围限制
    if (res < Math.pow(-2, 31)) { 
        return Math.pow(-2, 31)
    }
    if (res > Math.pow(2, 31) - 1) { 
        return Math.pow(2, 31) - 1
    }
    // console.log('res---', res)
    return res
};

myAtoi(' +1')