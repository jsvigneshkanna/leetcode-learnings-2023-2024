/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let end = -1
    for (let index=0; index< word.length; index++) {
        if (word[index] === ch) {
            end = index
            break
        }
    }
    
    let start = 0
    word = word.split("")
    while (start < end) {
        const temp = word[start]
        word[start] = word[end]
        word[end] = temp
        
        start++
        end--
    }
    
    return word.join("")
};