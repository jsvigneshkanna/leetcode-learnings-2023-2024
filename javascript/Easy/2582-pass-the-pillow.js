/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    const rounds = Math.floor(time/(n-1))
    const extraSteps = time%(n-1)
    
    if (rounds %2 === 0) {
        return extraSteps + 1
    }
    
    return n- extraSteps
};