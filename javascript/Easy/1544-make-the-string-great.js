/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [""]
    
    for (const char of s) {
        const stackTop = stack.at(-1)
        if (stackTop.toLowerCase() === char.toLowerCase() && stackTop !== char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    
    return stack.join("")
};