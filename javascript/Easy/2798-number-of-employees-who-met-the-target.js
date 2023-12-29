/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let targetMet = 0;
    for (hour of hours) {
        if (hour>= target) {
            targetMet+=1
        }
    }
    return targetMet;
};