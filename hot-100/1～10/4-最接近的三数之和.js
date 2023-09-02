/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
     // 排序
     nums.sort((a, b) => a - b)
     let n = nums.length
     let a = 0
     let b = 0
     let c = 0
     let best = Number.MAX_SAFE_INTEGER;
     for(let i = 0; i < n; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        a = i
        b = i + 1
        c = n - 1

        while(b < c) {
            const sum = nums[a] + nums[b] + nums[c]
            if (Math.abs(sum - target) < Math.abs(best - target)) {
                best = sum;
            }
            if(best === target) {
                return best
            }
            if(sum > target) {
                c = c - 1 // 左移
            } else {
                b = b + 1 // 右移
            }
        }
     }
     return best
};
console.log(threeSumClosest([0,3,97,102,200], 300));