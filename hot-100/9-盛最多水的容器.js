/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 超时== 能用双指针不用2循环
    // for(let i = 0; i < height.length - 1; i++) {
    //     let left = height[i] 
    //     let index = i
    //     while(index < height.length) {
    //         let right = height[index]
    //         area = Math.max(area, Math.min(left, right) * (index - i)) 
    //         index++
    //     }
    // }
    if(height.length <= 1) return 0
    let area = 0
    let i = 0
    let j = height.length - 1
    while(i < j) {
        let left = height[i]
        let right = height[j]
        area = Math.max(area, Math.min(left, right) * (j - i))
        if(left < right) {
            i++
        } else {
            j--
        }
    }
    return area
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));