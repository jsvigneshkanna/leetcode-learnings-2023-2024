/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let diagonalSum = 0
    for (let row=0; row<mat.length; row++) {
        for (let col=0; col<mat[row].length; col++) {
            if (Math.abs(row-col)==0 || row+col == mat.length-1) {
                console.log(row,col)
                diagonalSum+= mat[row][col]
            }
        }
    }
    return diagonalSum
};