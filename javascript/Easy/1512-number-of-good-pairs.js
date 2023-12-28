/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const seen = {}
    let goodPairs = 0
    // for (let index=0; index<nums.length; index++) {
    //     if (nums[index] in seen) {
    //         goodPairs += seen[nums[index]]
    //         seen[nums[index]] += 1
    //     }
    //     else {
    //         seen[nums[index]] = 1
    //     }
    // }
    
    for (num of nums) {
        console.log(num)
       if (num in seen) {
            goodPairs += seen[num]
            seen[num] += 1
        }
        else {
            seen[num] = 1
        }
    }
    return goodPairs
};