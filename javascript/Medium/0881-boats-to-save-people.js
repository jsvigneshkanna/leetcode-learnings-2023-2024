/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    
    let boats = 0
    let start = 0
    let end = people.length-1
    while (start <= end) {
        const combine = people[start]+ people[end]
        if (combine <= limit) {
            start++
            end--
        } else {
            end--
        }
        boats++
    }
    
    return boats
};