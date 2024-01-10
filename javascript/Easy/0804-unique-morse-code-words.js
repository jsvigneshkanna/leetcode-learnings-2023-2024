/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    const distinctMorseEncodes = new Set()
    for (let word of words) {
        let encode = ""
        for (let char of word) {
            encode = encode.concat(morseCodes[char.charCodeAt(0) - 'a'.charCodeAt(0)])
        }
        distinctMorseEncodes.add(encode)
    }
    return distinctMorseEncodes.size
};