/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b)=> a-b)
    console.log(nums)
    for (let index=1; index<nums.length; index+= 2) {
        const temp = nums[index]
        nums[index] = nums[index-1]
        nums[index-1] = temp
    }
    return nums
};