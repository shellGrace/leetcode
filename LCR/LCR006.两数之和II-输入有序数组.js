/**
 * LCR 006. 两数之和 II - 输入有序数组
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 在有序数组中寻找满足特定条件的元素或组合时，考虑 双指针+二分查找
双指针
function twoPointer(数组, 目标) {
    初始化左指针 left = 0;
    初始化右指针 right = 数组长度 - 1;
    while (左指针 < 右指针) {
        if (满足条件) {
            记录结果;
            return;
        } else if (条件1) {
            左指针向右移动: left++;
        } else {
            右指针向左移动: right--;
        }
    }
    返回结果;
}
二分法
function binarySearch(数组, 目标) {
    初始化左边界 left = 0;
    初始化右边界 right = 数组长度 - 1;

    while (左边界 <= 右边界) {
        计算中间索引 mid = Math.floor((左边界 + 右边界) / 2);

        if (满足条件) {
            返回 mid; // 找到目标
        } else if (条件1) {
            左边界向右移动: left = mid + 1;
        } else {
            右边界向左移动: right = mid - 1;
        }
    }
    返回结果;
}
 */
/** 双指针 */
 var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while(left < right) {
        let sum = numbers[left] + numbers[right]
        if(sum === target) {
            return [left, right]
        } else if(sum < target) {
            left++
        } else {
            right--
        }
    }
    return []
};

console.log(twoSum([1,2,4,6,10], 8));