/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }
    let minLen = Math.min(s.length, numRows) 
    let arr = new Array(minLen).fill('')
    let down = false
    let curRow = 0 // 动态
    for(let i = 0; i < s.length; i++) {
        arr[curRow] = arr[curRow] + s[i]
        if(curRow === 0) {
            down = true
        } else if (curRow === numRows - 1) {
            down = false
        }
        curRow = down ? curRow + 1 : curRow - 1 // 向下行加一，往回减一
    }
    let r = ''
    for(let item of arr) {
        r += item
    }
    return r
};

console.log(convert('AB', 1));
