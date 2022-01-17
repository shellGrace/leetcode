// 输入: [1,2,3,1]
// 输出: true

const containsDuplicate = function(nums) {
    let temp = {}
    for(let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        if(temp[cur] !== undefined) {
            return true
        } 
        temp[cur] = i
    }
    return false
};

console.log('r', containsDuplicate([1,2,3,1]))