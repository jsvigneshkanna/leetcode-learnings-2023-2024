/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const newS = new Array(s.length).fill(' ')
    for (let index=0; index<s.length; index++) {
        newS[indices[index]] = s.charAt(index)
        // console.log(s.charAt(indices[index]))
    }
    return newS.join("")
};