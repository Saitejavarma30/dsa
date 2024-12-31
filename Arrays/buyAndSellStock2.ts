//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

function maxProfit(prices: number[]): number {
    let profit = 0;
    for(let i=0;i<prices.length-1; i++){
        if(prices[i] < prices[i+1]){
            profit += prices[i+1] - prices[i]
        }
    }
    return profit
};