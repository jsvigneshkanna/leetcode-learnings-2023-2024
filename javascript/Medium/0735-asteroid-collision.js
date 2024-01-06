/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = []
    for (asteroid of asteroids) {
        if (stack.length==0) {
            stack.push(asteroid)
        }
        else {
            let toAddNewAsteroid = true
            while (true) {
                if (asteroid<0 && stack.at(-1)>0 && (Math.abs(stack.at(-1)) < Math.abs(asteroid)) ) {
                    stack.pop()
                }
                else if (asteroid<0 && stack.at(-1)>0 && (Math.abs(stack.at(-1)) > Math.abs(asteroid)) ) {
                    toAddNewAsteroid = false
                    break
                }
                else if (asteroid<0 && stack.at(-1)>0 && (Math.abs(stack.at(-1)) == Math.abs(asteroid)) ) {
                    stack.pop()
                    toAddNewAsteroid = false
                    break
                }
                else {
                    break
                }
            }
            if (toAddNewAsteroid || asteroid>0) {
                stack.push(asteroid)
            }
        }
    }
    return stack
};