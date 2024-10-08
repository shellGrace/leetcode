/**
 * LCR 087. 复原 IP 地址
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const SEG_COUNT = 4;
  const segIp = new Array(SEG_COUNT);
  const res = [];

  const dfs = (s, segId, segStart) => {
    // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
    if (segId === SEG_COUNT) {
      if (segStart === s.length) {
        // 用完了所有字符 结束递归
        res.push(segIp.join("."));
      }
      return;
    }
    //  如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
    if (segStart === s.length) {
      return;
    }
    // 处理IP段为0情况
    if (s.charAt(segStart) === "0") {
      segIp[segId] = 0;
      // 直接进行下一段
      dfs(s, segId + 1, segStart + 1);
    }
    // 枚举所有可能并递归-常规情况
    let sum = 0;
    for (let segEnd = segStart; segEnd < s.length; segEnd++) {
      sum = parseInt(s.slice(segStart, segEnd + 1));
      if (sum > 0 && sum <= 255) {
        segIp[segId] = sum;
        dfs(s, segId + 1, segEnd + 1);
      } else {
        break; // 不符合条件直接结束遍历
      }
    }
  };
  dfs(s, 0, 0); // 递归开始
  return res;
};

s1 = "25525511135";
// ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses(s1));

s2 = "0000";
// ["0.0.0.0"]
console.log(restoreIpAddresses(s2));

s3 = "1111";
// ["1.1.1.1"]
console.log(restoreIpAddresses(s3));

s4 = "010010";
// ["0.10.0.10","0.100.1.0"]
console.log(restoreIpAddresses(s4));

s5 = "10203040";
// ["10.20.30.40","102.0.30.40","10.203.0.40"]
console.log(restoreIpAddresses(s5));
