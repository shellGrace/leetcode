/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle === '') {
        return 0
    }
    let len = needle.length
    let index = 0
    let str = ''
    while(index < haystack.length - len + 1) {
        str = haystack.slice(index, len+index)
        // console.log('str', str, index)
        if(str === needle) {
            return index
        }
        index++
    }
    return -1
};

console.log(strStr('aaaaaa', 'bba')) 