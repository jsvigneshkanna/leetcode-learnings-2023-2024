/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let composedVal = x;
        for (let index= functions.length-1; index>=0; index--) {
            composedVal = functions[index](composedVal)
        }
        return composedVal
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */