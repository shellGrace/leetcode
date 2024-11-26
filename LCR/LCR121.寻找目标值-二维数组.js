/**
 * LCR 121. 寻找目标值 - 二维数组
 * @param {number[][]} plants
 * @param {number} target
 * @return {boolean}
 */
var findTargetIn2DPlants = function(plants, target) {
    if(!plants.length) return false
    let m = plants.length
    let n = 0
    let childLen = plants[0].length
    while(m > 0 && m <= plants.length && n < childLen) {
        // 从左下角出发
        let cur = plants[m-1][n]
        if(cur === target) {
            return true
        } else if(cur < target) {
            n++
        } else {
            m--
        }
    }
    return false
};

let plants = [[1,3,5],[2,5,7]], target = 4
// let plants = [[2,3,6,8],[4,5,8,9],[5,9,10,12]], target = 8
console.log(findTargetIn2DPlants(plants, target));

// 遍历一维数组
// 遍历二维子数组-判断存在 target 值 存在则返回true
// 没有找到则返回 false

// 给了条件 说明不按照条件来就会超时 两个循环需要合并处理 即 根据 a[i][j] ?== target 
// 相同行 代表 i 相等 相同列 代表 j 相等 但是这个要怎么用上 >= right >= bottom

// if a[i][j] < target a++ or a[i][j] > target a--
// 顺序遍历，行递增 判断 如果 target < a[i][j] 则无需进行后续列的查找 节省时间
// 列递增 如果 target < a[i][j] 则无需进行后续行的查找
// plants[i][j] <= plants[i][j+1] 行-单调递增
// plants[i][j] <= plants[i+1][j] 列-单调递增

// m*n 的二维数组 plants 记录了园林景观的植物排布情况，具有以下特性：
// 每行中，每棵植物的右侧相邻植物不矮于该植物；>= right 从左到右是递增的 plants[i][j] <= plants[i][j + 1]
// 每列中，每棵植物的下侧相邻植物不矮于该植物。>= bottom 从上到下是递增的 plants[i][j] <= plants[i + 1][j]

// 请判断 plants 中是否存在目标高度值 target。
// 示例 1：
// 输入：plants = [[2,3,6,8],[4,5,8,9],[5,9,10,12]], target = 8
// 输出：true
// 示例 2：
// 输入：plants = [[1,3,5],[2,5,7]], target = 4
// 输出：false
