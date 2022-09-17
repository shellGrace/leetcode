/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let res = 0
    for(let i = 0; i < 32; i++){
        res <<= 1
        // 取n最后一位赋值给res
        res |= n & 1
        n >>= 1 
    }
    return res
};

console.log(reverseBits(0b00000010100101000001111010011100)) // 964176192  43261596

// 笔记
// 二转十进制：parseInt(string, radix)  // radix 为需要转的进制
// 十进制转二进制：number.toString(radix) // radix 为目标进制

// 右移需要区分有符号无符号，因为移位需最高位补0（有符号补1，最高位为负）
// 左移无需区分 左移 << 、右移 >>>（无符号） >>(有符号)