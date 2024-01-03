/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    return using2Array(nums)
};

const using2Array = (arr) => {
    const leftArr = new Array(arr.length).fill(1)
    const rightArr = new Array(arr.length).fill(1)
    for (let index=1; index<arr.length; index++) {
        leftArr[index] = leftArr[index-1]+ arr[index-1]
    }
    for (let index=arr.length-2; index>=0; index--) {
        rightArr[index] = rightArr[index+1]+ arr[index+1]
    }
    for (let index=0; index<arr.length; index++) {
        arr[index] = Math.abs(leftArr[index] - rightArr[index])
    }
    return arr
}