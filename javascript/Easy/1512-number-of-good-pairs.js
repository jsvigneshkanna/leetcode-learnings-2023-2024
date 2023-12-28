/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const seen = {}
    let goodPairs = 0
    for (let index=0; index<nums.length; index++) {
        if (nums[index] in seen) {
            goodPairs += seen[nums[index]]
            seen[nums[index]] += 1
        }
        else {
            seen[nums[index]] = 1
        }
    }
    return goodPairs
};