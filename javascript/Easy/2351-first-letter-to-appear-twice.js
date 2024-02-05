/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    return bySet(s)
};

const bySet = (s) => {
    const seen = new Set()
    for (const char of s) {
        if (seen.has(char)) {
            return char
        }
        seen.add(char)
    }
    return ""
}