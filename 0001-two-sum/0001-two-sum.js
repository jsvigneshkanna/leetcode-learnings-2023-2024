/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    valueIndex = {}
    for (let index=0; index<nums.length; index++) {
        const difference = target-nums[index]
        if (difference in valueIndex) {
            return [index, valueIndex[difference]]
        }
        else {
            valueIndex[nums[index]] = index
        }
    }
    return [-1, -1]
};