/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seenIndex = {}
    for (let index=0; index<nums.length; index++) {
        if (seenIndex.hasOwnProperty(target-nums[index])) {
            return [index, seenIndex[target-nums[index]]]
        }
        seenIndex[nums[index]] = index
    }
    return [-1, -1]
};