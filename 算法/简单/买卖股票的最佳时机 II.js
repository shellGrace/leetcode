/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if(prices.length < 2) return 0
    let total = 0
    let index = 0
    while(index < prices.length-1) {
        let profit = prices[index+1] - prices[index]
        if(profit > 0) {
            total += profit
        }
        index++
    }
    return total
};

// 输入: prices = [7,1,5,3,6,4]
// 输出: 7
console.log('maxProfit', maxProfit([7,1,5,3,6,4]))