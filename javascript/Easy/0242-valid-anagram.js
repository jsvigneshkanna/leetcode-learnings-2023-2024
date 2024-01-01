/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const charMap = new Map();
    for (let index=0; index<s.length; index++) {
       charMap.set(s[index], (charMap.has(s[index]) ? charMap.get(s[index]) : 0) + 1);
    charMap.set(t[index], (charMap.has(t[index]) ? charMap.get(t[index]) : 0) - 1);

    }
    console.log(charMap)
    for (const val of charMap.values()) {
        if (val !== 0) {
            return false
        }
    }
    return true
    
//     var freq = new Array(26).fill(0);
//     for (var i = 0; i < s.length; i++) {
//         freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//         freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
//     }
    
//     for (var i = 0; i < freq.length; i++) {
//         if (freq[i] !== 0) {
//             return false;
//         }
//     }
    
//     return true;
};