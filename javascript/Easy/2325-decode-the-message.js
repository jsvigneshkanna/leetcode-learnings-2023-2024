/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const alphaCipher = {}
    key = key.split(" ").join("")
    const seen = new Set()
    let alphaCount = 0
    for (let index=0; index<key.length; index++) {
        if (!seen.has(key.charAt(index)) && key.charAt(index) != " ") {
            alphaCipher[key.charAt(index)] = String.fromCharCode('a'.charCodeAt(0) + alphaCount)
            // console.log(key.charAt(index), String.fromCharCode('a'.charCodeAt(0) + alphaCount))
            alphaCount++
        }
        seen.add(key.charAt(index))
    }
    console.log(alphaCipher)
    let result = ""
    for (let char of message) {
        if (char === ' ') {
            result = result.concat(char)
        }
        else {
            result = result.concat(alphaCipher[char])
        }
    }
    return result
};