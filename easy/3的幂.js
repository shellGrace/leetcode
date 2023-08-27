/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if(n <= 0) return false
    let n1 = n
    while(n1 <= n && n1 !== 1) {
        if(n1 % 3 !== 0) {
            return false
        }
        n1 = n1 / 3
    }
    return true
};

console.log('isPowerOfThree', isPowerOfThree(0));