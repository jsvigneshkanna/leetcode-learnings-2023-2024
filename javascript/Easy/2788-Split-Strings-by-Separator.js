/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const resultArr = []
    for (let word of words) {
        resultArr.push(...word.split(separator))
    }
    return resultArr.filter((_, index, __)=> resultArr[index] != "")
};
