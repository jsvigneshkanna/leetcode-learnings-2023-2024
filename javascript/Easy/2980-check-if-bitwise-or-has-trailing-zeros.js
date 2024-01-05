/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    const evens = nums.filter((_, index, arr)=> {
        return nums[index]%2==0
    }).length
    console.log(evens)
    return evens>=2
};