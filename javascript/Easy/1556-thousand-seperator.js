/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    n= n.toString()
    if (n.length<=3) {
        return n
    }
    else {
        let formatedN = ""
        n = n.split("")
        let mul = 1
        for (let index=n.length-1; index>=0; index--) {
            // console.log(n[index])
            formatedN = formatedN.concat(n[index])
            if (mul%3==0 && index !=0) {
                formatedN = formatedN.concat(".")
            }
            mul++
        }
        console.log(mul)
        return formatedN.split('').reverse().join('')
    }
};
