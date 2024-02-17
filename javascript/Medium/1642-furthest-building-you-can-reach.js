/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(h,b,l){
    let lgestjumps=new Array(l).fill(0)
    let i;
    for(i=1;i<h.length;i++){
        let jump=h[i]-h[i-1]
        if(jump>0){
            if(jump>lgestjumps[0]){
                let j=lgestjumps.length-1
                while(j>=0 && lgestjumps[j]>jump){
                    j--
                }
                b-=lgestjumps.shift()
                lgestjumps.splice(j,0,jump)
            }else{
                b-=jump
            }
            if(b<0) return i-1
        }
    }
    return i-1
}