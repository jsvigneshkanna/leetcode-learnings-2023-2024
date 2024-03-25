/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // return usingSet(nums)
    return usingNoSpace(nums)
};

const usingNoSpace = (nums) => {
    const res = []
    for (let index=0; index< nums.length; index++) {
        if (nums[Math.abs(nums[index])-1] < 0) {
            res.push(Math.abs(nums[index]))
        } else {
            nums[Math.abs(nums[index])-1] *= -1
        }
    }
    
    
    return res
}

const usingSet = (nums) => {
    const set = new Set()
    const res = []
    for (const num of nums) {
        if (set.has(num)) {
            res.push(num)
        } else {
            set.add(num)
        }
    }
    return res
}