/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    s = s.split("")
    let maxDepth=0
    let depth = 0
    
    for (const c of s) {
        if (c === '(') {
            depth++
        } else if (c === ')'){
            depth--
        }
        maxDepth = Math.max(maxDepth, depth)
    }
    
    return maxDepth
};