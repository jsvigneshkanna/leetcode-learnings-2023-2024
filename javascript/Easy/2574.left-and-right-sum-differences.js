/*
 * @lc app=leetcode id=2574 lang=javascript
 *
 * [2574] Left and Right Sum Differences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  // return using2Array(nums)
  return using1Array(nums);
};

const using1Array = (arr) => {
  const runningSum = new Array(arr.length).fill(0);
  for (let index = 1; index < arr.length; index++) {
    runningSum[index] = runningSum[index - 1] + arr[index - 1];
  }
  // runningSum[0]=1

  console.log(runningSum);
  let rightSum = arr.at(-1);
  for (let index = arr.length - 2; index >= 0; index--) {
    runningSum[index] = Math.abs(runningSum[index] - rightSum);
    rightSum += arr[index];
  }
  return runningSum;
};

const using2Array = (arr) => {
  const leftArr = new Array(arr.length).fill(1);
  const rightArr = new Array(arr.length).fill(1);
  for (let index = 1; index < arr.length; index++) {
    leftArr[index] = leftArr[index - 1] + arr[index - 1];
  }
  for (let index = arr.length - 2; index >= 0; index--) {
    rightArr[index] = rightArr[index + 1] + arr[index + 1];
  }
  for (let index = 0; index < arr.length; index++) {
    arr[index] = Math.abs(leftArr[index] - rightArr[index]);
  }
  return arr;
};
// @lc code=end
