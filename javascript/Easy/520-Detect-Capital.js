/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const isFirstCapital = word.at(0) >= 'A' && word.at(0) <= 'Z'
    let capitalCharCount = 0
    for (wordChar of word) {
        if (wordChar.at(0) >= 'A' && wordChar.at(0) <= 'Z') {
            capitalCharCount ++
        }
    }
    return capitalCharCount == word.length || (isFirstCapital && capitalCharCount==1) || capitalCharCount === 0
};
