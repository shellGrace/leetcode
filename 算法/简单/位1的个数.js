/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let count = 0
    for(let i = 0; i < 32; i++){
        if (((n >>> i) & 1) == 1) {
            count++
        }
    }
    return count
};

console.log('hammingWeight', hammingWeight(00000000000000000000000010000000));

// 有符号右移操作符：>>，无符号右移操作符：>>>，将数值所有位向右移动n位