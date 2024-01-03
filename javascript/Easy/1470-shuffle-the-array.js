/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const shuffleArr = []
    for (let index=0; index<n; index++) {
        shuffleArr.push(nums[index], nums[index+n])
    }
    return shuffleArr
};