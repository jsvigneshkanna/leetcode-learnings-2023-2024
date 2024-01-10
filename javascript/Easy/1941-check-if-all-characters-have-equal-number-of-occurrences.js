/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const charMap = new Map()
    for (let char of s) {
        charMap.set(char, charMap.get(char)? charMap.get(char)+1:  1)
    }
    const someRandomFreq = charMap.get(s[0])                
    for (let freq of charMap.values()) {
        if (someRandomFreq !== freq) {
            return false
        }
    }
    return true
};