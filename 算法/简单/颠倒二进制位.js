/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let res = ''
    for(let i = 0; i < 32; i++){
        let end = (n >>> i) & 1
        let str = String(end)
        // 放入新的二进制组成
        res += str
    }
    // 最后转十进制
    return parseInt(res, 2)
};

console.log(reverseBits(0b00000010100101000001111010011100)) // 964176192  43261596

// 笔记
// 二转十进制：parseInt(string, radix)  // radix 为需要转的进制
// 十进制转二进制：number.toString(radix) // radix 为目标进制