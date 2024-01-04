/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let decompressArr = []
    for (let index=0; index<nums.length; index+= 2){
        // decompressArr.concat([nums[index+1]* nums[index]])
        decompressArr = [...decompressArr, ...new Array(nums[index]).fill(nums[index+1])]
        console.log(decompressArr)
        
    }
    return decompressArr
};