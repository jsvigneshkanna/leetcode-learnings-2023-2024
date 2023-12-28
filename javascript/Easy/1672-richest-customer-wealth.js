/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (account of accounts){
        let wealth = 0
        for (money of account) {
            wealth += money
        }
        maxWealth = Math.max(maxWealth, wealth)
    }
    return maxWealth
    
};