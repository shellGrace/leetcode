function deepEqual(obj1, obj2, seen = new Set()) {
  if (obj1 === obj2) {
    return true;
  }
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }
  // 检查循环引用
  if (seen.has(obj1) || seen.has(obj2)) {
    return false;
  }
  // 将当前对象添加到已经看过的对象集合中
  seen.add(obj1);
  seen.add(obj2);
  // 比较对象的属性
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!deepEqual(obj1[key], obj2[key], seen)) {
      return false;
    }
  }
  return true;
}

const testEqual = (input, output) => {
  if (typeof input !== typeof output) {
    console.log("输出值类型错误");
    return false;
  }
  if (Array.isArray(input)) {
    if (input.length !== output.length) {
      return false;
    }
    return input.every(function (element, index) {
      return element === output[index];
    });
  } else if (typeof input === "object") {
    return deepEqual(input, output);
  } else {
    return input === output
  }
};
