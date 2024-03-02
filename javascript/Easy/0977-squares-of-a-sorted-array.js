/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let [left, right] =[ 0, nums.length-1]
    const result = new Array(nums.length).fill(0)
    let index=nums.length-1
    
    while (left<= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[index--] = nums[left] * nums[left]
            left++
        }
        else {
            result[index--] = nums[right] * nums[right]
            right--
        }
    }
    return result
};