/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    const wordSetMap = new Map()
    let similarCount = 0
    for (word of words) {
        const wordSet = [...new Set(word)].sort((a, b) => a.localeCompare(b)).join("")
        if (wordSetMap.has(wordSet)) {
            similarCount += wordSetMap.get(wordSet)
            wordSetMap.set(wordSet, wordSetMap.get(wordSet)+1)
        }
        else {
            wordSetMap.set(wordSet, 1)
        }
    }
    console.log(wordSetMap)
    return similarCount
};
