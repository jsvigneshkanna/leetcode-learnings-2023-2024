/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let alphaFreq = new Map()
    for (const char of s) {
        alphaFreq.set(char, (alphaFreq.get(char) || 0) + 1);
    }
    alphaFreq = new Map([...alphaFreq.entries()].sort((a,b)=> b[1]- a[1]))
    let res = ""
    console.log(alphaFreq)
    for (const [key, val] of alphaFreq.entries()) {
        for (let index=0; index< val; index++) res += key
    }
    return res
};