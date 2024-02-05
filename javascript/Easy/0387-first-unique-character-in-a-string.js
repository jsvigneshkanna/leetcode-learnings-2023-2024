/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // return byMap(s)
    return byIndexOf(s)
    
};

const byIndexOf = (s) => {
    for (let index=0; index< s.length; index++) {
        if (s.indexOf(s[index]) === s.lastIndexOf(s[index])) {
            return index
        }
    }
    return -1
}

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