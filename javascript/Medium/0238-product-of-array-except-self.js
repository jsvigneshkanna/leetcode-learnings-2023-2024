/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // return productByDivide(nums)
    return productByArray(nums)
};

const productByArray = (arr) => {
    const leftArray = new Array(arr.length).fill(1)
    const rightArray = new Array(arr.length).fill(1)    
    for (let index=1; index<arr.length; index++) {
        leftArray[index] = leftArray[index-1]* arr[index-1]
    }
    for (let index=arr.length-2; index>=0; index--) {
        rightArray[index] = rightArray[index+1] * arr[index+1]
    }
    console.log(leftArray, rightArray)
    
    for (let index=0; index<arr.length; index++) {
        arr[index] = leftArray[index]* rightArray[index]
    }
    return arr

}

const productByDivide = (arr) => {
    let product = arr.reduce((acc, val)=> acc* val, 1)
    console.log(product)
    arr.forEach((val, index, array)=> {
        array[index] = product/ array[index]
    })
    return arr
}