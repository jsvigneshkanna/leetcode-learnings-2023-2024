/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const numFreq = new Map()
    for (num of nums) {
        numFreq.set(num, (numFreq.get(num) || 0)+ 1)
    }
    console.log(numFreq)
    let minOps = 0
    for ([num, freq] of numFreq.entries()) {
        if (freq === 1) {
            return -1
        }
        minOps += Math.ceil(freq/3)
    }
    return minOps
};