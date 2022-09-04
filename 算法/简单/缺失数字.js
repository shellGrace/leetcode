/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let n = nums.length
    for (let i = 0; i < n; i++) {
        if(!nums.includes(i)) {
            return i
        }
    }
    return n
};

console.log('missingNumber', missingNumber([9,6,4,2,3,5,7,0,1]));