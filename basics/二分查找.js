/**二分查找算法/折半搜索算法/对数搜索算法
二分搜索只对有序数组有效。二分搜索先比较数组中比特素和目标值。
如果目标值与中比特素相等，则返回其在数组中的位置；
如果目标值小于中比特素，则搜索继续在前半部分的数组中进行。
如果目标值大于中比特素，则搜索继续在数组上部分进行。
由此，算法每次排除掉至少一半的待查数组。
**/

// 时间复杂度 最坏 O(log n)
var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15, 19, 20];

const binarySearch = (arr, target) => {
  const search = (start, end) => {
    if (start > end) return -1;
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > target) {
      return search(0, mid - 1);
    } else if (arr[mid] < target) {
      return search(mid + 1, end);
    } else {
      return mid;
    }
  }
  return search(0, arr.length - 1);
}
console.log( binarySearch(arr, 10) );

// 非递归版
/** 
int binary_search(const int arr[], int start, int end, int key) {
  int ret = -1;       // 未搜索到数据返回-1下标
  
int mid;
while (start <= end) {
  mid = start + (end - start) / 2; //直接平均可能會溢位，所以用此算法
  if (arr[mid] < key)
    start = mid + 1;
  else if (arr[mid] > key)
    end = mid - 1;
  else {            // 最後檢測相等是因為多數搜尋狀況不是大於要不就小於
    ret = mid;  
          break;
      }
}

return ret;     // 单一出口
}
**/