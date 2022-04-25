/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1
        let end = n
        while(start < end) {
            let mid = start + Math.floor((end - start) / 2)
            if(isBadVersion(mid)) {
                end = mid - 1
            } else {
                start = mid + 1
            }
            // console.log(start, end);
        }
        return start
    };
};

const isBadVersion = (v) => {
    return v === 4
}

solution(isBadVersion)(5)
// 12 3 45
// 当一个版本为正确版本，则该版本之前的所有版本均为正确版本；
// 当一个版本为错误版本，则该版本之后的所有版本均为错误版本