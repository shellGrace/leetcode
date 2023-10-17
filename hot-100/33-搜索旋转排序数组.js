/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let k = rotateSearch(nums); // 分界点
  if(k === 0) return binarySearch(nums, target); // 说明都是有序的
  
  let left = nums.slice(0, k);
  if(nums[0] === target) return 0;
  if(nums[0] > target) {
    // 说明不在left
    let right = nums.slice(k);
    let res = binarySearch(right, target);
    if(res === -1) return -1;
    return res + k;
  } else {
    return binarySearch(left, target);
  }
};

// 旋转数组搜索
var rotateSearch = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] < nums[end]) {
      // 说明 mid 之后都是有序
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

// 二分搜索
var binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// console.log(rotateSearch([4, 5, 6, 7, 0, 1, 2]));
// console.log(search([1, 3], 3));
// nums = [4,5,6,7,0,1,2], target = 0
// 4

/**
 * 题目要求时间复杂度为logn, 二分查找满足
 * 给定数组为旋转过的，在旋转之前为有序的。可以使用二分查找
 * 怎么处理旋转过的有序数组，在二分查找基础上加处理逻辑
 * 旋转后为两个有序数组 如 [4, 5, 6, 7, 0, 1, 2]; 以7为分界线，分为 [4, 5, 6, 7] [0, 1, 2]
 */

// 综合
var search2 = function (nums, target) {
    let start = 0
    let end = nums.length - 1 
    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        if(nums[mid] === target) return mid
        if(nums[0] <= nums[mid]) {
            // 说明中间值属于大数组 此段区间为有序
            // nums[0] <= target 固定左边，mid为动态 因此左移
            if(nums[0] <= target && nums[mid] > target) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            // 说明 mid 属于小数组
            if(nums[mid] < target && nums[end] >= target) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1
}
