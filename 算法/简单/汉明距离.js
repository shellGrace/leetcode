/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let xor = x ^ y
    let count = 0
    for(let i = 0; i < 32; i++){
        if (((xor >>> i) & 1) == 1) {
            count++
        }
    }
    return count
};

console.log('hammingDistance', hammingDistance(1, 4));
// 异或 0 ^ 0 = 0，0 ^ 1 = 1，1 ^ 1 = 1
