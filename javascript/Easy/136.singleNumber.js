/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let singleNum = 0;
  for (const num of nums) {
    singleNum ^= num;
  }
  return singleNum;
};
// @lc code=end
