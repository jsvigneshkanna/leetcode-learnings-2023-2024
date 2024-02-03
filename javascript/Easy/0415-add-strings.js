/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let sumString = ""
    let carrySum = 0
    let str1Index= 0
    let str2Index = 0
    num1 =  num1.split('').reverse().join('')
    num2 =  num2.split('').reverse().join('')
    while (str1Index< num1.length || str2Index< num2.length || carrySum>0) {
        let sum = carrySum
        if (str1Index< num1.length) {
            sum += parseInt(num1[str1Index])
            str1Index++
        }
        if (str2Index< num2.length) {
            sum += parseInt(num2[str2Index])
            str2Index++
        }
        carrySum = sum>9 ? Math.floor(sum/ 10): 0
        sumString += (sum%10).toString()
    }
    return sumString.split('').reverse().join('')
};