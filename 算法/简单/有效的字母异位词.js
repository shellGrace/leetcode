/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    var getIndexes = function(str) {
        let obj = {}
        for(let i = 0; i < str.length; i++) {
            let cur = str[i]
            if(obj[cur] === undefined) {
                obj[cur] = 1 
            } else {
                obj[cur] += 1   
            }
        }
        return obj
    }
    let obj1 = getIndexes(s)
    let obj2 = getIndexes(t)
    // console.log('obj1', obj1)
    // console.log('obj1', obj2)
    for(let item in obj1) {
        if(obj1[item] !== obj2[item]) {
            return false
        }
    }
    return true
};

let s = "anagram"
let t = "nagaram"

console.log('isAnagram', isAnagram(s, t))