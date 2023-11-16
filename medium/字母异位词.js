/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  let sign = false
  for (let str of strs) {
    let keys = map.keys()
    for (let key of keys) {
        if (areAnagrams(str, key)) {
            map.set(key, [...map.get(key), str])
            sign = true
        }
    }
    !sign && map.set(str, [str]);
    sign = false
  }
  return Array.from(map.values())
};

const areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

// console.log(areAnagrams("ant", "nat"));

console.log(groupAnagrams(["", "gggggd"]));
