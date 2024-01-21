/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    for (let index=1; index<nums.length; index++) {
        if (index-2>=0) {
            nums[index] = Math.max(nums[index]+ nums[index-2], nums[index-1])
        }
        else {
            nums[index] = Math.max(nums[index], nums[index-1])
        }
    }
    return nums.at(-1)
};

// [2,7,9,3,1]
// [2,7, 11, 11, 12]

// [1,2,3,1]
// [1,2,4,4]