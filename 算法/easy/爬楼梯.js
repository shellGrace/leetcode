/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n < 3) return n
    let sum = 0
    let first = 1
    let second = 2
    let i = n
    while(i > 2) {
        sum = first + second; // 1+2 + 2+1+2 + 1+2+2+1+2
        first = second;
        second = sum;
        i--
    }
    return sum
    // if(n === 1) return 1
    // if(n === 2) return 2
    // return climbStairs(n - 1) + climbStairs(n - 2)
};

// 1 -f(1)=1
// 2 -f(2)=2
// 3 -f(3)=f(1)+f(2)
// ...
// n -f(n)=f(1)+f(2)+f(3) ...+f(n-1)