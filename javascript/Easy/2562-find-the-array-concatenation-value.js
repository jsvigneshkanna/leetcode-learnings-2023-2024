/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let concatSum = 0
    while (nums.length) {
        const firstEle = nums.shift()
        const lastEle = nums.pop() || ''
        const concatEle = parseInt(firstEle.toString().concat(lastEle.toString()))
        concatSum += concatEle
    }
    return concatSum
};