/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for (let index=1; index<nums.length; index++) {
        nums[index]+= nums[index-1]
    }
    return nums
};