/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const numFreq = new Map()
    for (const num of arr) {
        numFreq.set(num, numFreq.get(num)? numFreq.get(num)+1: 1)
    }
    const luckies = []
    for (const num of arr) {
        if (num == numFreq.get(num)) {
            luckies.push(num)
            numFreq.set(num, -1)
        }
    }
    console.log(luckies.sort())
    const result = luckies.sort((a,b)=> a-b).at(-1) || -1
    return result
};