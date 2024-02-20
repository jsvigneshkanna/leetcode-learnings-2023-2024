/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // const numsLen = nums.length
    // const originalSum = Math.floor((numsLen* (numsLen+1))/ 2)
    // let arraySum = nums.reduce((acc, num)=> num+acc, 0)
    // return originalSum- arraySum
    const n = nums.length
    const arraySum = Math.floor((n*(n+1))/2)
    let actualSum = 0
    for (const num of nums) {
        actualSum += num
    }
    return arraySum - actualSum
};