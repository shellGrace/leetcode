/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    // let minLen = matrix[0].length;  // 拿到每个小数组长度
    // let result = Array.from(new Array(minLen),()=>{return new Array(minLen).fill(0)})
    // for(let i = 0; i < matrix.length; i++) {
    //     for(let j = 0; j < matrix.length; j++) {
    //         result[j][minLen-(i+1)] = matrix[i][j]
    //     }
    // }
    // result.forEach((e, i) => {
    //     matrix[i] = e
    // })
    
    for(let i = 0; i < matrix.length / 2; i++) {
        let temp = matrix[i] 
        matrix[i] = matrix[matrix.length - (i+1)]
        matrix[matrix.length - (i+1)] = temp
    }
    // j = i+1 单侧对角线
    for(let i = 0; i < matrix.length; i++) {
        for(let j = i+1; j < matrix.length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    console.log(matrix)
};
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)