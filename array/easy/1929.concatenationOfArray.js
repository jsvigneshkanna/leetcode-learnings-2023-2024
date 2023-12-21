/*
 * @lc app=leetcode id=1929 lang=javascript
 *
 * [1929] Concatenation of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const numsLength = nums.length;
  const newNums = new Array(numsLength);
  //   console.log(newNums);
  for (let index = 0; index < numsLength; index++) {
    newNums[index] = nums[index];
    newNums[index + numsLength] = nums[index];
  }
  return newNums;
};
// @lc code=end
