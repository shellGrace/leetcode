/**
 * LCR 008. 长度最小的子数组
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * 滑动窗口 核心思想是维护一个可以扩展和收缩的窗口来减少不必要的重复计算 适用于寻找连续子数组或子字符串相关的问题
 * 固定窗口：找到固定长度的子数组（或子字符串）时，滑动窗口可以通过不断向右滑动的方式避免重复计算。
 * 可变窗口：要求最小/最大长度或最短/最长子数组时，需要动态调整窗口的大小，通过 双指针（或称左右指针）来控制窗口的收缩和扩展
 * Infinity 无穷大 -Infinity 无穷小
 * function slidingWindowTemplate(s) {
    // 定义窗口左右指针
    let left = 0, right = 0;
    
    // 定义需要用到的数据结构（如哈希表）来统计窗口中的状态
    let window = new Map();
    
    // 初始化结果（如最大长度、最小长度、目标子数组等）
    let result = Infinity; // 或者 0，取决于题目是求最小值还是最大值
    
    // 右指针开始移动，扩展窗口
    while (right < s.length) {
        const char = s[right];
        // 处理窗口中的元素，更新窗口状态
        window.set(char, (window.get(char) || 0) + 1);
        // 根据题意，判断当前窗口是否满足条件
        while (窗口满足条件 ) {
            // 在这里处理当前窗口的结果，比如更新最小长度或最大长度
            result = Math.min(result, right - left + 1); // 或者 Math.max
            // 左指针移动，收缩窗口
            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);
            // 如果某些条件不再满足，可能需要移除某个元素
            if (window.get(leftChar) === 0) {
                window.delete(leftChar);
            }
            left++;
        }
        // 继续右移扩展窗口
        right++;
    }
    // 返回结果（取决于题目）
    return result === Infinity ? -1 : result;
    }
 * 
 * 
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let left = 0, right = 0
  let minLength = Infinity
  
  while(right < nums.length) {
    sum += nums[right]
    // 通过移动 left 指针来缩小窗口，找到更小的符合条件的子数组。
    while (sum >= target) {
        sum -= nums[left];
        minLength = Math.min(minLength, right - left + 1)
        left++
    }
    right++
  }
  return minLength !== Infinity ? minLength : 0
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));