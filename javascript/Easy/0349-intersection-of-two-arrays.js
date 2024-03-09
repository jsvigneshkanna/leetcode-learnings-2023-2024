/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const setNum = new Set()
    
    for (const num of nums1) {
        setNum.add(num)
    }
    const res=[]
    for (const num of nums2) {
        if (setNum.has(num)) {
            setNum.delete(num)
            res.push(num)
        }
    }
    return res
};