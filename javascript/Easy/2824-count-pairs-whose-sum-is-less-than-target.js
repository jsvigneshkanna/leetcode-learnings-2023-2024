/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a-b);
    let [left, right] = [0, nums.length-1]
    let pairs = 0
    while (left<right) {
        if (nums[left]+ nums[right] < target) {
            pairs += (right-left)
            left++
        }
        else {
            right--
        }
    }
    return pairs
};