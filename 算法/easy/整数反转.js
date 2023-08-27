/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let result = 0
    while(Math.abs(x) !== 0) {
        let n = x % 10
        result = result * 10 + n
        x = parseInt(x / 10) // 当 x/10 等于小数时，取整会为0
    }
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) { // 限制反转后数字32位
        return 0;
    }
    return result
};

console.log(reverse(1534236469)) 

