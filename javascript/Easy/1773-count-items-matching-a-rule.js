/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const ruleKeyIndex = {
        "type": 0,
        "color": 1,
        "name": 2
    }
    let matchings = 0
    for (item of items) {
        if (item[ruleKeyIndex[ruleKey]] == ruleValue) {
            matchings++
        }
    }
    return matchings
};