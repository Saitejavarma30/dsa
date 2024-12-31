

//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let buy = prices[0]
    for(let i =0;i<prices.length; i++){
        if(prices[i]<buy){
            buy = prices[i]
        }
        else if(prices[i]-buy >= maxProfit){
            maxProfit = prices[i] - buy
        }
    }
    return maxProfit
};
