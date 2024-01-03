/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const [rows, cols] = [new Array(matrix.length).fill(0), new Array(matrix[0].length).fill(0)]
    for (let row=0; row<matrix.length; row++) {
        for (let col=0; col<matrix[row].length; col++) {
            if (!matrix[row][col]) {
                rows[row] = 1
                cols[col] = 1
            }
        }
    }
    
    for (let row=0; row<matrix.length; row++) {
        for (let col=0; col<matrix[row].length; col++) {
            if (rows[row] || cols[col]) {
                matrix[row][col] = 0
            }
        }
    }
    return matrix
};