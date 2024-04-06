/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    s = s.split("")
    
    // usage of stack
    const stack = []
    let index
    
    for (index=0; index<s.length; index++) {
        if (s[index] === '(') {
            stack.push(index)
        } else if (s[index] === ')') {
            if (stack.length) {
                // valid parantheses as there is '(' in stack already
                stack.pop()
            } else {
                s[index] = ""
            }        
        }
        // console.log(s)
    }
    // console.log(stack)
    for (let i of stack) {
        s[i] = ""
    }
    return s.join("")
};