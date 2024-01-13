/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const charMap = new Array(26).fill(0)
    if (s.length !== t.length) {
        return -1
    }
    for (let index=0; index<s.length; index++) {
        charMap[t[index].charCodeAt(0)- 'a'.charCodeAt(0)]++;
        charMap[s[index].charCodeAt(0)- 'a'.charCodeAt(0)]--;
    }
    let minSteps = 0
    for (const freq of charMap) {
        minSteps+= Math.max(0, freq)
    }
    return minSteps
};