/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let maxCount = 1
    const freqMap = new Map()
    
    nums.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0)+ 1)
        maxCount = Math.max(maxCount, freqMap.get(num))
    })
    
    let totalFreq = 0
    for (const [val, freq] of freqMap) {
        if (freq === maxCount) {
            totalFreq += freq
        }
    }
    
    return totalFreq
};