/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    // 汉明距离 指的是这两个数字对应二进制位不同的位置的数目
    let xor = x ^ y  // 二进制异或（找 对应二进制位不同）得到异或后结果
    let count = 0
    for(let i = 0; i < 32; i++){
        if (((xor >>> i) & 1) == 1) { // 位移遍历计数
            count++
        }
    }
    return count
};

console.log('hammingDistance', hammingDistance(1, 4));
// 异或 0 ^ 0 = 0，0 ^ 1 = 1，1 ^ 1 = 1
