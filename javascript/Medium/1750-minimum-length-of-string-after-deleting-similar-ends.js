/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let begin=0
    let end=s.length-1
    while (begin <end && s[begin] == s[end]) {
        const c = s[begin]
        
        while (begin <= end && s[begin] == c) {
            begin++
        }
        
        while (end > begin && s[end] == c) {
            end--
        }
    }
    
    return end-begin+1
};