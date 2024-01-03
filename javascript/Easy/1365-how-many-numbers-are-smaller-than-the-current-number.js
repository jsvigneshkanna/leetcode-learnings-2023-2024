/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    nums.forEach((_, index, array)=> {
        nums[index] = sortedNums.indexOf(nums[index])
    })
    return nums
};