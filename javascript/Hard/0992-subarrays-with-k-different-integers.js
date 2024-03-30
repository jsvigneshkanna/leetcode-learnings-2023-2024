/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithAtMostKDistinct = function (nums, k) {
  let i = 0,
    j = 0,
    res = 0;
  const map = new Map();
  while (j < nums.length) {
    if (map.get(nums[j]) === undefined) {
      map.set(nums[j], 1);
    } else {
      let count = map.get(nums[j]);
      count++;
      map.set(nums[j], count);
    }
    if (map.size <= k) {
      res = res + (j - i + 1);
    } else if (map.size > k) {
      while (i < nums.length && i <= j && map.size > k) {
        let count = map.get(nums[i]);
        count--;
        map.set(nums[i], count);
        if (count === 0) {
          map.delete(nums[i]);
        }
        i++;
      }
      res = res + (j - i + 1);
    }
    j++;
  }
  return res;
};

const subarraysWithKDistinct = (nums, k) => {
  return (
    subarraysWithAtMostKDistinct(nums, k) -
    subarraysWithAtMostKDistinct(nums, k - 1)
  );
};