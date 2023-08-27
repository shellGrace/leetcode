/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = function (num) {
    // 如果它不是质数，一定有两个数相乘等于它。这两个因数一定有一个因数小于等于根号
    // i * i 为了避免测试用例超时做时间复杂度优化
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};

console.log("countPrimes", countPrimes(10));
