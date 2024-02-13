/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (const word of words) {
        if (isPalindrome(word)) return word
    }
    return ""
};

const isPalindrome = (str) => {
    str = str.split("")
    let left=0
    let right=str.length-1
    while (left<= right) {
        if (str[left] != str[right]) return false
        left++
        right--
    }
    return true
}