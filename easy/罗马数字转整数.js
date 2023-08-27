/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let amount = 0
    let i = 0
    let len = s.length
    while(i < len) {
        let cur = romanMap[s[i]]
        let next = romanMap[s[i+1]]
        if(i < (len - 1) && cur < next) {
            amount -= cur
        } else {
            amount += cur
        }
        i++
    }
    return amount
};

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

// 通常情况下，罗马数字中小的数字在大的数字的右边。

let s = 'LVIII' // 58
console.log('romanToInt', romanToInt(s));