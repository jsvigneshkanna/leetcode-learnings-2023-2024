/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums)
    let maxCons = 0
    for (num of nums) {
        if (!(numsSet.has(num-1))) {
            let length = 0;
            while (numsSet.has(num+length)) {
                length++
            }
            maxCons = Math.max(maxCons, length)
        }
    }
    return maxCons
};