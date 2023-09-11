/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let str = "";
  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // 从大到小
  for (let key in romanMap) {
    let item = romanMap[key];
    while (num >= item) {
      num = num - item;
      str = str + key;
    }
    if (num == 0) {
      break;
    }
  }
  return str;
};

console.log(intToRoman(20));
