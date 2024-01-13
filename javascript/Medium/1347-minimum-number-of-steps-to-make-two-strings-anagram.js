/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    // const charMap = new Array(26).fill(0)
    const charMap = new Map()
    if (s.length !== t.length) {
        return -1
    }
    for (let index=0; index<s.length; index++) {
        // charMap[t[index].charCodeAt(0)- 'a'.charCodeAt(0)]++;
        // charMap[s[index].charCodeAt(0)- 'a'.charCodeAt(0)]--;
        charMap.set(t[index], charMap.get(t[index])? charMap.get(t[index])+1: 1)
        charMap.set(s[index], charMap.get(s[index])? charMap.get(s[index])-1: -1)
    }
    let minSteps = 0
    console.log(charMap)
    for (const freq of charMap.values()) {
        minSteps+= Math.max(0, freq)
    }
    return minSteps
};