/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const playerDetail = new Map()
    for (const match of matches) {
        const [winner, loser] = match
        if (playerDetail.get(winner) === undefined){
            playerDetail.set(winner, 0)
        }
        playerDetail.set(loser, playerDetail.get(loser)? playerDetail.get(loser)+1: 1)
    }
    const result = new Array(2).fill([]).map(() => []);
    for (const [player, detail] of playerDetail.entries()) {
        if (detail ==0) {
            result[0].push(player)
        }
        if (detail == 1) {
            result[1].push(player)
        }
    }
    result[0].sort((a,b)=> a-b)
    result[1].sort((a,b)=> a-b)
    return result
};