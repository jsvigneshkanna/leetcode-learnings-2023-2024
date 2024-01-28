/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numsLen = nums.length
    const originalSum = Math.floor((numsLen* (numsLen+1))/ 2)
    let arraySum = nums.reduce((acc, num)=> num+acc, 0)
    return originalSum- arraySum
};