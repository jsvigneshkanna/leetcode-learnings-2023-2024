/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x<0
    x = Math.abs(x)
    let reverse = 0
    while (x>0) {
        reverse = (reverse* 10) + (x% 10)
        x = Math.floor(x/ 10)
    }
    
    if (isNegative) reverse *= -1
    
    // special case
    if (reverse>= Math.pow(2, 31)-1 || reverse <= -Math.pow(2,31)) {
        return 0
    }
    
    return reverse
};