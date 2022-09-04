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
    while(i < s.length) {
        let item = s[i]
        let next = s[i+1]
        let temp = romanMap[item]
        let ivx = item === 'I' && (next === 'V' || next === 'X')
        let xlc = item === 'X' && (next === 'L' || next === 'C')
        let cdm = item === 'C' && (next === 'D' || next === 'M')
        if(ivx || xlc || cdm) {
            amount += romanMap[next] - temp
            i += 2
            continue
        }
        amount += temp
        i++
    }
    return amount
};

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

let s = 'LVIII' // 58
console.log('romanToInt', romanToInt(s));