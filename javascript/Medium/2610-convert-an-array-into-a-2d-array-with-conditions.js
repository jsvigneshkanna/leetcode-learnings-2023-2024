/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const resultArr = []
    let loopLimit = nums.length
    while (loopLimit) {
        const seen = new Set()
        const subArr = []
        for (let index=0; index<nums.length; index++) {
            if (nums[index] != null) {
                if (seen.has(nums[index])) {
                    continue
                }
                else {
                    seen.add(nums[index])
                    subArr.push(nums[index])
                    nums[index] = null
                    loopLimit--
                }
            }
        }
        resultArr.push(subArr)
    }
    return resultArr
};