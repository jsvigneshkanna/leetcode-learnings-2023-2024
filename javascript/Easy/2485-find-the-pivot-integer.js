/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let start = 1
    let end = n
    let leftSum = 1
    let rightSum = n
    
    if (n === 1) {
        return n
    }
    
    while (start < end) {
        if (leftSum < rightSum) {
            leftSum += (++start)
        } else {
            rightSum += (--end)
        }
        if (leftSum === rightSum && start+1 === end-1) {
            return start+1
        }
    }
    return -1
};