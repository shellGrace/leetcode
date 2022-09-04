/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let answer = new Array(n)
    for(let i = 0; i < n; i++) {
        let index = i + 1
        if(index % 3 === 0 && index % 5 === 0) {
          answer[i] = "FizzBuzz"
        } else if(index % 3 === 0) {
            answer[i] = "Fizz"
        } else if(index % 5 === 0) {
            answer[i] = "Buzz"
        } else {
            answer[i] = String(index)
        }
    }
    return answer
};

// answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
// answer[i] == "Fizz" 如果 i 是 3 的倍数。
// answer[i] == "Buzz" 如果 i 是 5 的倍数。
// answer[i] == i （以字符串形式）如果上述条件全不满足。

console.log('fizzBuzz', fizzBuzz(3));