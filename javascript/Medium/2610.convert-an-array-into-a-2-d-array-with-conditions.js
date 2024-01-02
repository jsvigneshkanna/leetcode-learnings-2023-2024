/*
 * @lc app=leetcode id=2610 lang=javascript
 *
 * [2610] Convert an Array Into a 2D Array With Conditions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = function (nums) {
  // return resultUsingSet(nums) // O(n^2)
  return resultUsingMap(nums); // O(n)
};

const resultUsingMap = (nums) => {
  const numFreq = new Map();
  const resultArr = [];
  for (num of nums) {
    if (resultArr.length <= (numFreq.get(num) || 0)) {
      resultArr.push([]);
    }
    resultArr[numFreq.get(num) || 0].push(num);
    numFreq.set(num, (numFreq.get(num) || 0) + 1);
  }
  return resultArr;
};

const resultUsingSet = (nums) => {
  const resultArr = [];
  let loopLimit = nums.length;
  while (loopLimit) {
    const seen = new Set();
    const subArr = [];
    for (let index = 0; index < nums.length; index++) {
      if (nums[index] != null) {
        if (seen.has(nums[index])) {
          continue;
        } else {
          seen.add(nums[index]);
          subArr.push(nums[index]);
          nums[index] = null;
          loopLimit--;
        }
      }
    }
    resultArr.push(subArr);
  }
  return resultArr;
};
// @lc code=end
