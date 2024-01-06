/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const words = s.split(" ")
    let lastWord = ""
    for (let index=0;index<k;index++) {
        lastWord = lastWord.concat(words[index])
        lastWord = lastWord.concat(" ")
    }
    return lastWord.trim()
};