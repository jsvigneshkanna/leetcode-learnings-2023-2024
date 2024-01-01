/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=> a-b);
    s.sort((a,b)=> a-b);
    console.log(g)
    console.log(s)

    let sIndex = 0;
    let gIndex = 0;
    while (sIndex<s.length && gIndex<g.length) {
        if (s[sIndex]>= g[gIndex]) {
            gIndex++
        }
        sIndex++
    }
    return gIndex;
};