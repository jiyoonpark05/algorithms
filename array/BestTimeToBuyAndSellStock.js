// 121. Best Time to Buy and Sell Stock
/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = 0;

  for (let sell = 1; sell < prices.length; sell++) {
    if (prices[buy] < prices[sell]) {
      profit = Math.max(profit, prices[sell] - prices[buy]);
    } else {
      buy = sell;
    }
  }

  return profit;
};
