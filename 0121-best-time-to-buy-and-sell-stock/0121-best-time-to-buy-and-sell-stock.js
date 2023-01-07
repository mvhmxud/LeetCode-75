const maxProfit = (prices) => {
  let Buy = 0; 
  let sell = 1; 
  let max_profit = 0;
  while (sell < prices.length) {
    if (prices[Buy] < prices[sell]) {
      let profit = prices[sell] - prices[Buy]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      Buy = sell;
    }
    sell++;
  }
  return max_profit;
};