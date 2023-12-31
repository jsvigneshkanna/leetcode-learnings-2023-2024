/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let onceVal = 'newVal';
    
    return function(...args){
        if (onceVal !== 'newVal') {
            return undefined;
        }
        onceVal = fn(...args)
        console.log(...args, onceVal)
        return onceVal
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
