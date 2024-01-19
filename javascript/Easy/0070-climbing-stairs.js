/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const stairs=[1,1]
    for (let i=2; i<=n; i++) {
        stairs.push(stairs.at(-1)+stairs.at(-2))
    }
    return stairs.at(-1)
};