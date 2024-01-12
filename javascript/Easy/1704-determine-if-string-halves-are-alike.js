/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let leftCount = 0
    let rightCount = 0
    let [left, right] = [0, s.length-1]
    while (left< right) {
        if (vowels.has(s[left])) leftCount++
        if (vowels.has(s[right])) rightCount++ 
        left++
        right--
    }
    return leftCount == rightCount
};