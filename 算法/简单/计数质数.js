/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = function (num) {
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
