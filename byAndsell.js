// Algo for find max profit
//step 1 = Define stockPrice[] for stock price where index value is the day,
//step 2 = Define a function getmaxprofit(stockprice)
//step 3 = Take variable lowestprice and diff,
//step 4 = Set the value of lowestprice is index[0] and diff =0;
//step 5 = Run the loop for itrrate the array.
//step 6 = Compare the lowestprice and current stockprice value
// and save the minimum value using math.min method
//Step 7 = stockprice munius lowest price and store into a diff variable using math.max method save the max difff
//return the diff

stockPrices = [2, 1, 2, 5, 9, 1];
function getMaxProfit(stockPrices) {
  debugger;
  let lowestPrice = stockPrices[0];
  let diff = 0;
  for (let i = 1; stockPrices.length > i; i++) {
    // console.log("line no. 7 item price :" + stockPrices[i]);
    lowestPrice = Math.min(lowestPrice, stockPrices[i]);
    // console.log("line no. 9 lowestprice :" + lowestPrice);
    diff = Math.max(diff, stockPrices[i] - lowestPrice);
    // console.log("line no. 11 diff maxprofit :" + diff);
  }
  return diff;
}
