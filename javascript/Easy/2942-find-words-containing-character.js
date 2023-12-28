/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const indexArray = []
    for (let index=0; index< words.length; index++) {
        if (words[index].includes(x)) {
            indexArray.push(index)
        }
    }
    return indexArray
};