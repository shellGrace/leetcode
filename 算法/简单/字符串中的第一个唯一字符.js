/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let object = {}
    for(let i = 0; i < s.length; i++) {
        let cur = s[i]
        if(object[cur] === undefined) {
            object[cur] = [i, 1]  // 开始计数
        } else {
            object[cur][1]++
        }
    }
    for(let item in object) {
        if(object[item][1] === 1) {  // 满足条件
            return object[item][0]
        } 
    }
    return -1
};

console.log('firstUniqChar', firstUniqChar("loveleetcode"))