/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const notation = new Array()
    for (const token of tokens) {
        if (!['*', '-', '/', '+'].includes(token)) {
            notation.push(token)
        }
        else {
            const b = parseInt(notation.pop())
            const a = parseInt(notation.pop())
            console.log(a,b)
            if (token === '+') notation.push(sum(a,b))
            else if (token === '*') notation.push(mul(a,b))
            else if (token === '-') notation.push(sub(a,b))
            else notation.push(div(a,b))
        }
    }
    return notation[0]
};

const sum = (a,b)=> a+b
const mul = (a,b)=> a*b
const sub = (a,b)=> a-b
const div = (a,b)=>  a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)
