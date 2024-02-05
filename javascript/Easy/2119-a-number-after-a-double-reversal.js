/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if (num< 0 || (num>0 && num%10 == 0)) {
        return false
    }
    return true
};