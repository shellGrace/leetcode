/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let r = []
    nums1.sort((a, b) => {
        return a - b
    }) // 对数组进行排序
    nums2.sort((a, b) => {
        return a - b
    })
    let i = 0
    let j = 0
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            i++
        } else if(nums1[i] > nums2[j]) {
            j++
        } else {
            r.push(nums1[i])  // 交集放入结果数组
            i++ // i 向后移一步
            j++ // j 向后移一步
        }  
    }
    return r
};

const intersect2 = function(nums1, nums2) {
    let r = []
    let object = {}
    // 处理第一个数组到 object
    for(let i = 0; i < nums1.length; i++) {
        let key = nums1[i]
        if(object[key] === undefined) {
            object[key] = 1
        } else {
            object[key] += 1
        }
    }
    for(let i = 0; i < nums2.length; i++) {
        let key = nums2[i]
        let count = object[key]
        if(object[key] !== undefined && count !== 0) {
            r.push(key)
            object[key] = count - 1
        }
    }
    return r
}
console.log(intersect2([4,9,5], [9,4,9,8,4]))