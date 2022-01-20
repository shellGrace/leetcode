/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    var containsDuplicate = function(nums) {
        let temp = {}
        for(let i = 0; i < nums.length; i++) {
            let cur = nums[i]
            if(cur !== "." && temp[cur] !== undefined) {
                return true
            } 
            temp[cur] = i
        }
        return false
    }

    let boardLen = board.length
    
    for(let i = 0; i < boardLen; i++) {
        // 每一行
        let rowArr = board[i]
        if(containsDuplicate(rowArr)) {
            return false  
        }
        // 每一列
        let lineArr = []
        for(let j = 0; j < rowArr.length; j++) {
            lineArr.push(board[j][i])
        }
        if(containsDuplicate(lineArr)) {
            return false  
        }
    }
    // 3*3
    let step = 3
    let lineBlocks = boardLen / step  // 每行3方块
    let blocks = lineBlocks * lineBlocks  // 一共9个小方块
    for(let i = 0; i < blocks; i++) {  // 确保拿到九个方块
        // 获取每个小方块定点坐标
        let x = parseInt(i / 3) * 3   // x 每一行保持不变
        let y = (i % 3) * 3  // y 依次加一（小方块内）
        console.log(x, y)
        let blockArr = []
        for(let i = x; i < x + lineBlocks; i++) {  // 确保拿到九个方块
            for(let j = y; j < y + lineBlocks; j++) {  // 确保拿到九个方块
                blockArr.push(board[i][j])
            }
        }
        if(containsDuplicate(blockArr)) {
            return false  
        }
    }
    return true
};
        
var isValidSudoku = function (board) {
    if (!board || !board.length || !board[0].length) {
      return false;
    }

    function test(arr) {
        let obj = {};
        for (let item of arr) {
          if (item !== ".") {
            if (obj[item]) {
              return false;
            }
            obj[item] = 1;
          }
        }
        return true;
      }
  
    // 行
    for (let i = 0; i < board.length; i++) {
      if (!test(board[i])) {
        return false;
      }
    }
  
    // 列
    for (let i = 0; i < board[0].length; i++) {
      let arr = [];
      for (let j = 0; j < board.length; j++) {
        arr.push(board[j][i]);
      }
      if (!test(arr)) {
        return false;
      }
    }
  
    // 3*3
    for (let num = 0; num < 9; num++) {
      // 总共9个 3*3
      let arr = [];
      let startX = parseInt(num / 3) * 3;
      let startY = (num % 3) * 3;
      console.log(startX, startY);
      for (let i = startX; i < startX + 3; i++) {
        for (let j = startY; j < startY + 3; j++) {
          arr.push(board[i][j]);
        }
      }
      if (!test(arr)) {
        return false;
      }
    }
  
    return true;
  };
  
  

let board = [[".",".","4",".",".",".","6","3","."],[".",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".","9","."],[".",".",".","5","6",".",".",".","."],["4",".","3",".",".",".",".",".","1"],[".",".",".","7",".",".",".",".","."],[".",".",".","5",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]

// console.log(containsDuplicate([".", '.']))
console.log(isValidSudoku(board))