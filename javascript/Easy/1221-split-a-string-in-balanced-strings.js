/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0
    let balancedStr = 0
    for (const char of s) {
        if (char === 'L') {
            count++
        }
        else {
            count--
        }
        
        if (count==0) {
            balancedStr++
        }
    }
    return balancedStr
};