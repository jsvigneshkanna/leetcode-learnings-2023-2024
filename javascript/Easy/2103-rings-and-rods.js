/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    rod_ring_map = new Map()
    for (let index=1; index< rings.length; index+=2) {
        const rod = rings.charAt(index)
        const ringColor = rings.charAt(index-1)
        rod_ring_map.set(rod, !rod_ring_map.get(rod)? new Set(ringColor): rod_ring_map.get(rod).add(ringColor))
    }
    let count=0
    for (let ringValue of rod_ring_map.values()) {
        if (ringValue.size === 3) {
            count++
        }
    }
    return count
};