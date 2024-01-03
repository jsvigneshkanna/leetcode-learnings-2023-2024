/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let mostWords = 0
    for (sentence of sentences) {
        mostWords = Math.max(mostWords, sentence.trim().split(" ").length)
    }
    return mostWords
};