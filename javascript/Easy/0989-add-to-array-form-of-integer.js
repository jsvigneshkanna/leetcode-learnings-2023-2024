/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    k = k.toString().split("").reverse()
    num = num.reverse()
    let [kIndex, numIndex] = [0,0]
    let carrySum =0
    const sumArray =[]
    while (kIndex< k.length || numIndex< num.length || carrySum) {
        let sum = carrySum
        if (kIndex< k.length) {
            sum += parseInt(k[kIndex])
            kIndex++
        }
        if (numIndex< num.length) {
            sum += num[numIndex]
            numIndex++
        }
        carrySum = sum>9 ? Math.floor(sum/ 10): 0
        sumArray.push(sum%10)
    }
    return sumArray.reverse()
};