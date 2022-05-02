/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let min = prices[0]
    let maxProfit = 0
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i]
        }
        let profit = prices[i] - min
        if(profit > maxProfit) {
            maxProfit = profit
        }
    }
    return maxProfit
};  

let prices = [7,1,5,3,6,4]
maxProfit(prices)