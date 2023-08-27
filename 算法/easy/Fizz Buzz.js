/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let answer = []
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
          answer.push("FizzBuzz")
        } else if(i % 3 === 0) {
            answer.push("Fizz")
        } else if(i % 5 === 0) {
            answer.push("Buzz")
        } else {
            answer.push(String(i))
        }
    }
    return answer
};

// answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
// answer[i] == "Fizz" 如果 i 是 3 的倍数。
// answer[i] == "Buzz" 如果 i 是 5 的倍数。
// answer[i] == i （以字符串形式）如果上述条件全不满足。

console.log('fizzBuzz', fizzBuzz(3));