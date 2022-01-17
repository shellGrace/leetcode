// 输入: [4,1,2,1,2]
// 输出: 4

const singleNumber = function(nums) {
    // let temp = {}
    // for(let i = 0; i < nums.length; i++) {
    //     let cur = nums[i]
    //     if(temp[cur] === undefined) {
    //         temp[cur] = 1
    //     } else {
    //         temp[cur] += 1
    //     }
    // }
    // for(let m in temp) {
        
    //     if(temp[m] === 1) {
    //         return m
    //     }
    // }
    let _set = new Set()
    for(let i = 0; i < nums.length; i++) {
        if(!_set.has(nums[i])) {
            _set.add(nums[i])
        } else {
            _set.delete(nums[i])
        }
    }
    return Array.from(_set)[0]
};

console.log(singleNumber([1, 2, 1]))
