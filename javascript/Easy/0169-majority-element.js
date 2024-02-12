/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return usingExtraSpace(nums)
};

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