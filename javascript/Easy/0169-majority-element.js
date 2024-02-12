/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // return usingExtraSpace(nums)
    return usingNotExtraSpace(nums)
};

const usingNotExtraSpace = (nums) => {
    let majNum = nums[0]
    let count = 1
    for (let index=1; index< nums.length; index++) {
        if (count == 0) {
            count++
            majNum = nums[index]
        }
        else if (nums[index] == majNum) {
            count++
        }else {
            count--
        }
    }
    return majNum
}

const usingExtraSpace = (nums) => {
    const freq = new Map()
    for (num of nums) {
        freq.set(num, (freq.get(num) || 0 )+ 1)
    }
    
    const majLen = Math.floor(nums.length/2)
    console.log(majLen, freq)
    
    for (const [key, val] of freq.entries()) {
        if (val > majLen) {
            return key
        }
    }
    return -1
}