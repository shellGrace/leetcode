/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    if (nums.length < 4) return []

    let result = []
    let n = nums.length
    let a, b, c, d
    nums.sort((a, b) => a - b)
    for(let i = 0; i < n; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        // 固定第一个 a
        a = i
        for(let j = i + 1; j < n; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }
            // 固定第2个 b
            b = j
            c = j + 1 // 左指针
            d = n - 1 // 右指针
            while(c < d) {
                const sum = nums[a] + nums[b] + nums[c] + nums[d]
                if(sum === target) {
                    result.push([nums[a], nums[b], nums[c], nums[d]])
                    // 避免重复的四元组
                    // 此循环内，a b固定的情况。如果c或d相等，一定会造成重复四元组
                    while (c < d && nums[c] === nums[c + 1]) {
                        c = c + 1
                    }
                    while (c < d && nums[d] === nums[d - 1]) {
                        d = d - 1
                    }
                    // 移动指针
                    c = c + 1
                    d = d - 1
                } else if(sum < target) {
                    c = c + 1
                } else {
                    d = d - 1
                }
            }
        }
    }
    return result
};

console.log('fourSum', fourSum([-2,-1,-1,1,1,2,2], 0));