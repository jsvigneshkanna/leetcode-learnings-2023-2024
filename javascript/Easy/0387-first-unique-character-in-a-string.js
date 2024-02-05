/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    return byMap(s)
};

const byMap = (s) => {
    const charCount = new Map()
    for (const char of s) {
        charCount[char] = (charCount[char] || 0)+ 1
    }
    for (let index=0; index< s.length; index++) {
        if (charCount[s[index]] == 1) {
            return index
        }
    }
    return -1
}