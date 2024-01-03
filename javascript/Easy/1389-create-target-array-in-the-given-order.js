/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let targetArr = []
    for (let i=0; i<nums.length; i++) {
        targetArr = [...targetArr.slice(0, index[i]), ...[nums[i]], ...targetArr.slice(index[i])]
    }
    return targetArr
};