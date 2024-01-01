/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramsMap = {}
    for (str of strs) {
        const sortedStr = [...str].sort().join("")
        if (anagramsMap.hasOwnProperty(sortedStr)) {
            anagramsMap[sortedStr].push(str)
        }
        else {
            anagramsMap[sortedStr] = [str]
        }
    }
    console.log(anagramsMap)
    const anagramGroup = []
    for (const anagram of Object.values(anagramsMap)) {
        anagramGroup.push(anagram)
    }
    return anagramGroup
};