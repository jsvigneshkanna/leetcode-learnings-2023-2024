/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    jewels = new Set(jewels)
    let count = 0
    for (stone of stones) {
        if (jewels.has(stone)) {
            count++
        }
    }
    return count
};