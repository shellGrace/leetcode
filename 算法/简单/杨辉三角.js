/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if(numRows === 0) return 0
    let res = [[1]]
    let preRow = [1]
    let row = []
    for(let i = 1; i < numRows; i++) {
        // 处理row数组
        preRow.splice(0, 0, 0)
        preRow.splice(i+1, 0, 0)
        let j = 0
        while(j < preRow.length - 1) {
            let e = preRow[j] + preRow[j+1]
            row.push(e)
            j++
        }
        res.push(row) 
        // 初始化
        preRow = [...row]
        row = []
    }
    return res
};

console.log('generate', generate(3));