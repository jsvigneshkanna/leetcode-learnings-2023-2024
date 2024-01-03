/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let laserBeams = 0
    let currentLaser = null
    for (row of bank) {
        const lasers = row.split("").filter((cell)=> cell==='1').length
        console.log(lasers)
        if (currentLaser !== null) {
            laserBeams += (lasers* currentLaser)
        }
        if (lasers !== 0) {
            currentLaser = lasers
        }
    }
    return laserBeams
};