/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    sentence = sentence.trim().split(" ")
    for (let index=0; index<sentence.length-1; index++) {
        if (sentence[index].at(-1) !== sentence[index+1].at(0)) {
            return false
        }
    }
    return sentence[0].at(0) === sentence.at(-1).at(-1)
};
