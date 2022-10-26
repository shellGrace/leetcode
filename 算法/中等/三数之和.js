/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if(nums.length < 3 || !nums) return []
    nums.sort((a, b) => a - b)
    let res = []
    let target = 0
    for(let i = 0; i < nums.length; i++) {
        target = nums[i]
        if(nums[i-1] === nums[i]) continue
        // 双指针
        let left = i+1
        let right = nums.length - 1
        while(left < right) {  // 直到他们相遇
            let temp = nums[left] + nums[right]
            if(temp + target === 0) {
                res.push([nums[i], nums[left], nums[right]])
                while(nums[left] === nums[left+1]) {
                    left++
                }
                while(nums[right] === nums[right-1]) {
                    right--
                }
                left++
                right--
            } else if (target + temp < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return res

    // // 去重
    // let obj = {}
    // const notRepeat = (arr) => {
    //     for(let i = 0; i < arr.length; i++) {
    //         let child = arr[i].toString()
    //         if(obj[child] === undefined) {
    //             obj[child] = arr[i]
    //         }
    //     }
    //     let r = []
    //     for(item in obj) {
    //         r.push(obj[item])
    //     }
    //     return r
    // }
    // res = notRepeat(res)
};

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]] [-1,-1,0,1]
console.log('threeSum: ', threeSum([0,1,1]));