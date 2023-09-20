/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = []
    let path = ''
    const tree = (path, left, right) => {
        if(left === 0 && right === 0) {
            result.push(path)
            return
        }
        if(left > 0) {
            tree(path + '(', left - 1, right)
        }
        if(left < right) {
            tree(path + ')', left, right - 1)
    
        } 
        if(left > right) {
            return
        } 
    }
    tree(path, n, n)
    return result
};

generateParenthesis(3)