/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const word1Str = word1.reduce((acc, val)=> acc.concat(val), "")
    const word2Str = word2.reduce((acc, val)=> acc.concat(val), "")
    return word1Str === word2Str
    
};