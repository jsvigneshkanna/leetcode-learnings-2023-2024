/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for(let index=0; index< arr.length; index++) {
        arr[index] = fn(arr[index], index)
    }
    return arr;
};