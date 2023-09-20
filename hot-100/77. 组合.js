/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let result = []
    const combineHelp = (start, cur) => {
        if(cur.length === k) {
            // 满足条件, 递归终止
            result.push([...cur])
            return
        }
        for(let i = start; i <= n; i++) {
            cur.push(i)
            combineHelp(i + 1, cur)
            cur.pop()
        }
     }
     combineHelp(1, [])
     return result
 };