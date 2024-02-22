/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
//     const truster = new Map()
//     const trustee = new Set()
    
//     for (const ele of trust) {
//         truster.set(ele[1], (truster.get(ele[1])||0)+1)
//         trustee.add(ele[0])
//     }
    
//     for (const [key, val] of truster) {
//         if (val == n-1 && !trustee.has(key)) {
//             return key
//         }
//     }
//     return -1
    const Trusted = new Array(n+1).fill(0);
    for(let [i,j] of trust) {
        Trusted[i] -= 1
        Trusted[j] += 1
    }
    for(let i = 1; i < Trusted.length; i++) {
        if ((n-1) === Trusted[i]) {
            return i;
        }
    }
    return -1
};