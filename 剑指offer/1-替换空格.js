/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
     let r = ''
    for(let i = 0; i < s.length; i++) {
        let a = s[i]
        if(s[i] === ' ') {
            a = '%20'
        }
        r = r + a
    }
    return r
};

replaceSpace("We are happy.")

// 输入：s = "We are happy."
// 输出："We%20are%20happy."