/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    for (let row =1; row<matrix.length; row++) {
        for (let col=0; col<matrix[0].length; col++) {
            const minFall = Math.min(matrix[row-1][col] !== undefined?matrix[row-1][col]:131313131, matrix[row-1][col-1]!== undefined?matrix[row-1][col-1]:131313131, matrix[row-1][col+1]!== undefined?matrix[row-1][col+1]:131313131) 
            matrix[row][col] += minFall
        }
    }
    return Math.min(...matrix[matrix.length-1])
    // return 13
};