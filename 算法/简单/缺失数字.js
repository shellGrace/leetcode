/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let n = nums.length
    let arr = nums.sort((a, b) => a - b)
    for (let i = 0; i < n; i++) {
        if(arr[i] !== i) {
            return i
        }
    }
    return n
};

console.log('missingNumber', missingNumber([9,6,4,2,3,5,7,0,1]));