/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // return resUsingSort(nums)
    return resUsingBucket(nums)
};

const resUsingBucket = (nums) => {
    const bucket = new Array(101).fill(0)
    const res = new Array(nums.length)
    for (num of nums) {
        bucket[num] += 1
    }
    for (let index=1; index<102; index++) {
        bucket[index] += bucket[index-1]
    }
    for (let index=0; index<nums.length; index++) {
        if (nums[index] == 0) {
            res[index] = 0
        }
        else{
        res[index] = bucket[nums[index]-1]
            
        }
    }
    return res
}

const resUsingSort = (nums) => {
    const sortedNums = [...nums].sort((a, b) => a - b);
    nums.forEach((_, index, array)=> {
        nums[index] = sortedNums.indexOf(nums[index])
    })
    return nums
}