/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  valueIndex = {};
  for (let index = 0; index < nums.length; index++) {
    const difference = target - nums[index];
    if (difference in valueIndex) {
      return [index, valueIndex[difference]];
    } else {
      valueIndex[nums[index]] = index;
    }
  }
  return [-1, -1];
};
// @lc code=end
