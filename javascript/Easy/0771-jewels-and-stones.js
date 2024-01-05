/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    jewels = new Set(jewels.split(""))
    let count = 0
    for (char of stones) {
        if (jewels.has(char)) {
            count++
        }
    }
    return count
};