/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    const setZeroAll = (mat, x, indexs) => {
        for(let i = 0; i < mat.length; i++) {
            if(i === Number(x)) {
                mat[i] = new Array(mat[i].length).fill(0)
            }
            let cur = mat[i]
            for(let i = 0; i < cur.length; i++) {
                if(indexs.includes(i)) {
                    cur[i] = 0
                }
            }
        }
        return mat
    }
    const findIndexZeros = (nums) => {
        let indexs = []
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 0) {
                indexs.push(i)
            }
        }
        return indexs
    }
    let indexsObj = {}
    for(let i = 0; i < matrix.length; i++) {
        let curArr = matrix[i]
        let indexs = findIndexZeros(curArr)
        if(indexs.length !== 0) {
            indexsObj[i] = indexs
        }
    }
    for(index in indexsObj) {
        setZeroAll(matrix, index, indexsObj[index])
    }
    return matrix
};

let matrix = [[1,1,1],[1,0,1],[1,1,1]]
console.log('setZeroes: ', setZeroes(matrix));

// x y 0
// x 行为0 当前数组全为0；y为0 找到为0的下标。所有其他数组同下标置为0
// 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]  [[1,0,1],[0,0,0],[1,0,1]]
// 输出：[[1,0,1],[0,0,0],[1,0,1]]