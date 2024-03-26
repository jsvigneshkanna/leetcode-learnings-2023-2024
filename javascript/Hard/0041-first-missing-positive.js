/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    return usingCycleSort(nums)
};

const usingCycleSort = (nums) => {
    const length = nums.length
    let index= 0
    while (index <length) {
        
        if (nums[index]>0 && nums[index]<= length && nums[index] !== nums[nums[index]-1]) {
            const indexEle = nums[index]
            nums[index] = nums[nums[index]-1]
            nums[indexEle-1] = indexEle
        } else {
            index++
        }
    }
    
    
    for (let index=0; index< length; index++) {
        if (index+1 !== nums[index]) {
            return index+1
        }
    }
    
    return length+1
}