/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let dIndex = digits.length-1
    let carrySum = 1
    while (dIndex>=0) {
        let sum = carrySum+ digits[dIndex]
        carrySum = Math.floor(sum/ 10)
        digits[dIndex] = sum% 10
        dIndex--
    }
    if (carrySum>0){
        digits.unshift(carrySum)
    }
    return digits
};