/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // return productByDivide(nums)
    // return productByArray(nums)
    return productByArrayNum(nums)
};

const productByArrayNum = (arr) => {
    const productArray = new Array(arr.length).fill(1)
    for (let index=1; index< arr.length; index++) {
        productArray[index] = productArray[index-1]* arr[index-1]
    }
    let product = arr[arr.length-1]
    for (let index=arr.length-2; index>=0; index--) {
        productArray[index] = product*productArray[index]
        product*=arr[index]
    }
    return productArray
}

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