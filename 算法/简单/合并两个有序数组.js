/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i]
    }
    nums1.sort((a, b) => {
        return a - b
    })
    // 双指针
    // let arr = []
    // let i = 0
    // let j = 0
    // while(i < m || j < n) {
    //     if(i === m || (nums1[i] > nums2[j])) {
    //         arr.push(nums2[j])
    //         j++
    //     }else if(j === n || (nums1[i] < nums2[j])) {
    //         arr.push(nums1[i])
    //         i++
    //     } else {
    //         arr.push(nums1[i])
    //         arr.push(nums2[j])
    //         i++
    //         j++
    //     }
    // }
    // for(let i = 0; i < nums1.length; i++) {
    //     nums1[i] = arr[i]
    // }
};

merge([1, 3, 5, 0, 0], 3, [3, 6], 2)